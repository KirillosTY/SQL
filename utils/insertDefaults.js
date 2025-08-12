
module.exports = {
    
}
module.exports = {
  up: async ({ context: queryInterface }) => {
    
   
   await queryInterface.bulkInsert('users', [
  { id: 1, username: 'notEmail@isemail.com', password: 'teeesst132', name: 'tester', created_at: new Date(), updated_at: new Date(),access:true },
  { id: 2, username: 'secondUser@example.com', password: 'password123', name: 'secondUser', created_at: new Date(), updated_at: new Date(), access:true }
]);


    // Blogs
    await queryInterface.bulkInsert('blogs', [
    { author: 'Alice Smith', title: 'Understanding JavaScript Closures', url: 'https://example.com/js-closures', likes: 15, year: 2022, user_id: 1, created_at: new Date(), updated_at: new Date() },
    { author: 'Bob Johnson', title: 'Introduction to PostgreSQL', url: 'https://example.com/postgresql-intro', likes: 20, year: 2021, user_id: 1, created_at: new Date(), updated_at: new Date() },
    { author: 'Carol Lee', title: 'Sequelize ORM Basics', url: 'https://example.com/sequelize-basics', likes: 12, year: 2023, user_id: 1, created_at: new Date(), updated_at: new Date() },
    { author: 'David Kim', title: 'Node.js Performance Tips', url: 'https://example.com/nodejs-performance', likes: 18, year: 2020, user_id: 1, created_at: new Date(), updated_at: new Date() },
    { author: 'Eva Brown', title: 'Async/Await in Modern JavaScript', url: 'https://example.com/async-await', likes: 25, year: 2024, user_id: 1, created_at: new Date(), updated_at: new Date() },

    { author: 'Frank Green', title: 'REST API Design Best Practices', url: 'https://example.com/rest-api', likes: 30, year: 2023, user_id: 2, created_at: new Date(), updated_at: new Date() },
    { author: 'Grace Hopper', title: 'Introduction to Kubernetes', url: 'https://example.com/kubernetes-intro', likes: 22, year: 2022, user_id: 2, created_at: new Date(), updated_at: new Date() },
    { author: 'Hannah White', title: 'GraphQL vs REST', url: 'https://example.com/graphql-vs-rest', likes: 28, year: 2024, user_id: 2, created_at: new Date(), updated_at: new Date() },
    { author: 'Ian Black', title: 'Microservices Architecture', url: 'https://example.com/microservices', likes: 18, year: 2021, user_id: 2, created_at: new Date(), updated_at: new Date() },
    { author: 'Jane Doe', title: 'Docker for Beginners', url: 'https://example.com/docker-basics', likes: 25, year: 2020, user_id: 2, created_at: new Date(), updated_at: new Date() }
    ]);

    // Reading lists
    await queryInterface.bulkInsert('reading_lists', [
    { user_id: 1, blog_id: 1, read: true },
    { user_id: 1, blog_id: 2, read: true },
    { user_id: 1, blog_id: 3, read: false },
    { user_id: 1, blog_id: 4, read: false },
    { user_id: 1, blog_id: 5, read: false },

    { user_id: 2, blog_id: 6, read: false },
    { user_id: 2, blog_id: 7, read: false },
    { user_id: 2, blog_id: 8, read: false },
    { user_id: 2, blog_id: 9, read: false },
    { user_id: 2, blog_id: 10, read: false }
    ]);

    }
  
 
 
}
