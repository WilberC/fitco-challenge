import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Pedido} from "../models/pedido";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  pedidosCollection: AngularFirestoreCollection<Pedido>;
  pedidos: Observable<Pedido[]>;
  pedidoDoc: AngularFirestoreDocument<Pedido>;
  pedidosPorEntregarCollection: AngularFirestoreCollection<Pedido>;
  pedidosPorEntregar: Observable<Pedido[]>;

  constructor(public db: AngularFirestore) {
    this.pedidosCollection = this.db.collection('pedidos', ref =>
      (ref.orderBy('fecha_creacion', 'desc')))
    this.pedidos = this.pedidosCollection.snapshotChanges().pipe(map(actions => (
      actions.map(a => {
        const data = a.payload.doc.data() as Pedido
        data.id = a.payload.doc.id
        return data
      })
    )))
  }

  getPedidos() {
    return this.pedidos
  }

  getPedidosPorEntregar() {
    this.pedidosPorEntregarCollection = this.db.collection('pedidos', ref =>
      (ref.orderBy('fecha_creacion', 'asc').where("entregado", "==", false)))
    this.pedidosPorEntregar = this.pedidosPorEntregarCollection.snapshotChanges().pipe(map(actions => (
      actions.map(a => {
        const data = a.payload.doc.data() as Pedido
        data.id = a.payload.doc.id
        return data
      })
    )))
    return this.pedidosPorEntregar
  }

  addPedidos(pedido: Pedido) {
    this.pedidosCollection.add(pedido)
  }

  updatePedido(pedido: Pedido) {
    this.pedidoDoc = this.db.doc(`pedidos/${pedido.id}`);
    this.pedidoDoc.update(pedido);
  }

}
