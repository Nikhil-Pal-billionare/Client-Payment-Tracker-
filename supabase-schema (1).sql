create table clients (
  id text primary key,
  name text not null,
  email text,
  status text not null default 'lead',
  payments jsonb not null default '[]',
  status_history jsonb not null default '[]',
  churn_reason text,
  churn_date text,
  created_at text not null,
  updated_at text not null
);

create table expenses (
  id text primary key,
  amount numeric not null,
  source text not null,
  date text not null,
  note text
);

alter table clients enable row level security;
alter table expenses enable row level security;

create policy "allow all clients" on clients
  for all using (true) with check (true);

create policy "allow all expenses" on expenses
  for all using (true) with check (true);
