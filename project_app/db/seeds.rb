# db/seeds.rb

# Seed users
users = User.create!([
  { name: 'Alice Smith', email: 'alice.smith@example.com', password: 'password123' },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', password: 'password456' },
  { name: 'Carol Williams', email: 'carol.williams@example.com', password: 'password789' }
])

# Seed projects
projects = Project.create!([
  { name: 'Project Alpha', image_url: 'https://example.com/images/alpha.jpg' },
  { name: 'Project Beta', image_url: 'https://example.com/images/beta.jpg' },
  { name: 'Project Gamma', image_url: 'https://example.com/images/gamma.jpg' }
])

# Seed join table data
UserProject.create!([
  { user: users[0], project: projects[0], progress: 75.0, options: { color: 'blue' } },
  { user: users[0], project: projects[1], progress: 50.0, options: { color: 'green' } },
  { user: users[1], project: projects[2], progress: 20.0, options: { color: 'red' } },
  { user: users[2], project: projects[0], progress: 85.0, options: { color: 'purple' } },
  { user: users[2], project: projects[1], progress: 40.0, options: { color: 'yellow' } }
])

puts "Seeded #{UserProject.count} user-project associations."
