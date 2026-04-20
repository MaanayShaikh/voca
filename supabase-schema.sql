create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  niche text,
  bio text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.voice_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  label text not null default 'Primary voice',
  source_summary text,
  tone_traits text[] not null default '{}',
  cadence_traits text[] not null default '{}',
  lexical_traits text[] not null default '{}',
  prompt_instructions text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.generated_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  voice_profile_id uuid references public.voice_profiles (id) on delete set null,
  title text,
  prompt text not null,
  platform text,
  status text not null default 'draft',
  content text not null,
  is_favorite boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.voice_profile_samples (
  id uuid primary key default gen_random_uuid(),
  voice_profile_id uuid not null references public.voice_profiles (id) on delete cascade,
  sample_text text not null,
  sample_type text not null default 'manual',
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists generated_posts_user_id_idx
  on public.generated_posts (user_id, created_at desc);

create index if not exists voice_profiles_user_id_idx
  on public.voice_profiles (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.voice_profiles enable row level security;
alter table public.generated_posts enable row level security;
alter table public.voice_profile_samples enable row level security;

create policy "Users can read their profile"
  on public.profiles
  for select
  using (auth.uid() = id);

create policy "Users can update their profile"
  on public.profiles
  for update
  using (auth.uid() = id);

create policy "Users can insert their profile"
  on public.profiles
  for insert
  with check (auth.uid() = id);

create policy "Users can manage their voice profiles"
  on public.voice_profiles
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can manage their generated posts"
  on public.generated_posts
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can manage their voice samples"
  on public.voice_profile_samples
  for all
  using (
    exists (
      select 1
      from public.voice_profiles
      where public.voice_profiles.id = voice_profile_samples.voice_profile_id
        and public.voice_profiles.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.voice_profiles
      where public.voice_profiles.id = voice_profile_samples.voice_profile_id
        and public.voice_profiles.user_id = auth.uid()
    )
  );
