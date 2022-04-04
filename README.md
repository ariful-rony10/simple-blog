# Simple Blog Website

---

Using HTML, CSS, Nodejs and MongoDB. This project was build during the learning period of mongoDB. This is a vary simple project with all the CRUD operations. Though it is a vary small project but one of my favourite one because this is the first project that the frontend working with with the backend.

---

## Interface

### **Home Page**

![Home Page](https://i.ibb.co/59wzr8C/Inter-Face.jpg)

### **View Post**

![View Post](https://i.ibb.co/BgPzR84/view-post.jpg)

### **Create Post**

![Create Post](https://i.ibb.co/QFgNwy2/create-post.jpg)

### **Edit Post**

![Edit Post](https://i.ibb.co/V9f2bH9/edit-post.jpg)

## To Run the projetc

Download or clone the directory then run `npm install` to install all the dependencies.
Run `npm start` to run the project.

### Database collection structure

Posts Table Will have =>

- id
- title
- summary
- body
- date
- author name + author id

Authors Table will have

- id
- name
- email

## Create The Database

Create mongoDB database

```
use blog
```

Create posts collections in mongodb

```
db.posts.insertMany([
    {
    title: 'First Post using MongoDB',
    summary: '',
    body: '',
    date: new Date(),
    authorName: ,
    authorId:
}
])
```

Create author collections in mongodb

```
db.authors.insertMany([
{
    name: 'Md. Ariful Islam',
    email: 'ariful.rony10@gmail.com'
},
{
    name: 'John Doe',
    email: 'john.doe@gmail.com'
},
{
    name: 'Tonmoy',
    email: 'tonmoy@gmail.com'
},
{
    name: 'Sakib',
    email: 'sakib@gmail.com'
},
{
    name: 'Souvik',
    email: 'souvik@gmail.com'
}
])
```

Now, Visit [localhost:3000](http://localhost:3000/)
