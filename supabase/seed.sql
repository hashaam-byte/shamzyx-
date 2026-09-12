truncate table project_verticals, projects, stack_items, journey_points restart identity cascade;

insert into projects (slug, name, tagline, image, types, story, featured, live_url, sort_order) values
('attendy', 'ATTENDY', 'School attendance made simple.', '/images/project-attendy.jpg', '{"web","mobile"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built Attendy.', false, 'https://attendy-web.vercel.app', 0),
('nexttalk', 'NEXTTALK', 'More than messaging. It''s an ecosystem.', '/images/project-nexttalk.jpg', '{"mobile"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built NextTalk.', false, 'https://nexttalk-web.vercel.app', 1),
('floodguard', 'FLOODGUARD', 'A conceptual hardware idea for smart flood control.', '/images/project-floodguard.jpg', '{"hardware"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you conceived FloodGuard.', true, null, 2),
('ghost-z', 'GHOST Z', 'NEEDS REAL CONTENT — add a one-line tagline.', '/images/project-ghost-z.jpg', '{"web"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built Ghost Z.', false, 'https://ghost-z.vercel.app', 3),
('u-plus', 'U+', 'NEEDS REAL CONTENT — add a one-line tagline.', '/images/project-u-plus.jpg', '{"mobile"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built U+.', false, 'https://u-plus.vercel.app', 4),
('mscakehubco', 'MS CAKE HUB CO', 'NEEDS REAL CONTENT — add a one-line tagline.', '/images/project-mscakehubco.jpg', '{"web"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built MS Cake Hub Co.', false, 'https://mscakehubco.vercel.app', 5),
('acex', 'ACE X', 'NEEDS REAL CONTENT — add a one-line tagline.', '/images/project-acex.jpg', '{"web"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built Ace X.', false, 'https://acex.vercel.app', 6),
('chess14', 'CHESS14', 'NEEDS REAL CONTENT — add a one-line tagline.', '/images/project-chess14.jpg', '{"web"}',
  'NEEDS REAL CONTENT — write the story of when, how, and why you built Chess14.', false, 'https://chess14.vercel.app', 7);

insert into project_verticals (project_id, name, url, status, sort_order)
select id, 'Attendy Edu', 'https://attendy-edu.vercel.app', 'live', 0 from projects where slug = 'attendy'
union all
select id, 'Attendy Biz', 'https://attendy-biz.vercel.app', 'in-progress', 1 from projects where slug = 'attendy'
union all
select id, 'Attendy Office', 'https://attendy-office.vercel.app', 'in-progress', 2 from projects where slug = 'attendy';

insert into stack_items (name, icon, sort_order) values
('Next.js', 'N', 0),
('React', '⚛', 1),
('Flutter', '◆', 2),
('Node.js', '⬡', 3),
('PostgreSQL', '🐘', 4),
('Tailwind CSS', '≈', 5),
('Supabase', '⚡', 6),
('Python', 'Py', 7);

insert into journey_points (label, title, description, sort_order) values
('JSS3', 'Curiosity', 'Discovered coding through a friend, school ICT, Code.org, and simple HTML.', 0),
('SS1', 'Exploration', 'Started taking programming seriously and explored CSS, JavaScript, Java, React, Next.js, Python and more.', 1),
('SS1 → SS2', 'Experimentation', 'Built NextTalk and experimented with projects like Zing Survey, Connect Hub, Hoom and Ultimate AI.', 2),
('SS2', 'Expansion', 'Moved beyond web development into mobile development and explored C#, C++, PHP, Dart, Flutter, React Native and other technologies.', 3),
('SS2', 'Building for problems', 'Created projects including Qaseedah, Ghost Z, U+, Chess14 and eventually Attendy.', 4),
('NOW', 'Still building', 'Continuing to learn, experiment, build products, and turn ideas into things people can actually use.', 5);
