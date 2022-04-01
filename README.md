# Simple Blog Website

## Using HTML, CSS, Nodejs and MongoDB

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
