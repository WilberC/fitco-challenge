select sum(i.paid)                                            ingresos,
       sum(case when m.endDate < NOW() then total - paid end) deudas,
       count(distinct m.userEstablishmentId)                  usuarios
from invoice_membership i
         join memberships m on m.id = i.membershipId
         join plans p on m.planId = p.id
where p.name like 'Recurrente'
  and total > 0
  and m.status = 1;