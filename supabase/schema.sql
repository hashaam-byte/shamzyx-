create extension if not exists "pgcrypto";

create table projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  tagline text,
  image text,
  types text[] not null default '{}',
  story text,
  featured boolean not null default false,
  live_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table project_verticals (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  name text not null,
  url text not null,
  status text not null check (status in ('live', 'in-progress')),
  sort_order integer not null default 0
);

create table stack_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  icon text,
  sort_order integer not null default 0
);

create table journey_points (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  title text not null,
  description text,
  sort_order integer not null default 0
);

create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  created_at timestamptz not null default now()
);

alter table projects enable row level security;
alter table project_verticals enable row level security;
alter table stack_items enable row level security;
alter table journey_points enable row level security;
alter table contact_messages enable row level security;

create policy "Public can read projects" on projects for select using (true);
create policy "Public can read project_verticals" on project_verticals for select using (true);
create policy "Public can read stack_items" on stack_items for select using (true);
create policy "Public can read journey_points" on journey_points for select using (true);

create policy "Authenticated can manage projects" on projects
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated can manage project_verticals" on project_verticals
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated can manage stack_items" on stack_items
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated can manage journey_points" on journey_points
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

create policy "Anyone can submit a contact message" on contact_messages
  for insert with check (true);
create policy "Authenticated can read contact messages" on contact_messages
  for select using (auth.role() = 'authenticated');
create policy "Authenticated can update contact messages" on contact_messages
  for update using (auth.role() = 'authenticated');
create policy "Authenticated can delete contact messages" on contact_messages
  for delete using (auth.role() = 'authenticated');
