const app = require('../mockedAPI/index')
const request = require("supertest");

const user = {
    "name": "Altair",
    "username": "altuname",
    "password": "123456!",
    "favouriteFruit": "alt fruit",
    "favouriteMovie": "alt Room",
    "favouriteNumber": "alt 23"
}

const nonUser = {}

test("Check root path ", async done => {
    const res = await request(app).get("/")
    expect(res.statusCode).toBe(200);
    expect(res.req.method).toBe('GET');
    expect(res.text).toBe('Backend API');
    done();
});

test("Create User", async done => {
    const res = await request(app)
        .post("/user")
        .send(user)
    expect(res.request._data).toEqual(user)
    expect(res.req.method).toBe('POST');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Account Created');
    done();
});

test("Create Existing User", async done => {
    const res = await request(app)
        .post("/user")
        .send(user)
    expect(res.request._data).toEqual(user)
    expect(res.req.method).toBe('POST');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Account Already Exists');
    done();
});

test("Update User", async done => {
    const res = await request(app)
        .put("/user")
        .send(user)
    expect(res.request._data).toEqual(user)
    expect(res.req.method).toBe('PUT');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Account Updated');
    done();
});

test("Update Non-existing User", async done => {
    const res = await request(app)
        .put("/user")
        .send(nonUser)
    expect(res.request._data).toEqual(nonUser)
    expect(res.req.method).toBe('PUT');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Account Does NOT Exist');
    done();
});

test("Delete a User", async done => {
    const res = await request(app)
        .delete("/user")
        .send(user)
    expect(res.request._data).toEqual(user)
    console.log(res.request._data)
    expect(res.req.method).toBe('DELETE');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Account Deleted');
    done();
});

test("Delete Non-Existing User", async done => {
    const res = await request(app)
        .delete("/user")
        .send(nonUser)
    expect(res.request._data).toEqual(nonUser)
    expect(res.req.method).toBe('DELETE');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Account Does Not Exist');
    done();
});