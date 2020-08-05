import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Menu} from "../models/menu";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    menusCollection: AngularFirestoreCollection<Menu>;
    menus: Observable<Menu[]>;
    menuDoc: AngularFirestoreDocument<Menu>;

    constructor(public db: AngularFirestore) {
        this.menusCollection = this.db.collection('menus', ref =>
            (ref.where('cantidad', '>', 0)))
        this.menus = this.menusCollection.snapshotChanges().pipe(map(actions => (
            actions.map(a => {
                const data = a.payload.doc.data() as Menu
                data.id = a.payload.doc.id
                return data
            })
        )))
    }

    getMenus() {
        return this.menus
    }

    addMenu(menu: Menu) {
        this.menusCollection.add(menu)
    }

    updateMenu(menu: Menu) {
        this.menuDoc = this.db.doc(`menus/${menu.id}`);
        this.menuDoc.update(menu);
    }
}
