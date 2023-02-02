import { expect } from "chai";
import supertest from "supertest";
const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = '6104fa0f7fa5f0c9fd1f57cdfd0f768d22a5f5260be3951fee90ab5cf44b7f3d';

describe('user', () => {

    it('get users', () => {
        // request
        //     .get(`users?access-token=${TOKEN}`).end((err,res)=>{
        //        expect(res.body.id).to.not.be.null;
        //        done();
        //     });         

        return request
            .get(`users?access-token=${TOKEN}`).then((res) => {
                expect(res.body.name).to.not.be.null;
            });
    });


    it('get /users/:id', () => {
        return request
            .get(`users/3259?access-token=${TOKEN}`).then((res) => {
                expect(res.body.id).to.be.eq(3259);
                expect(res.body.name).to.be.eq("Yousaf")
            });

    });


    //GET REQUEST WILL GET LIST OF PERSON 

    it('get /users by query params', () => {

        const url = `users?access-token=${TOKEN}&page=5&gender=female&status=active`
        return request
            .get(url).then((res) => {
                expect(res.body).to.not.be.empty;

                res.body.forEach(element => {
                    expect(element.gender).to.eq("female")
                    expect(element.status).to.eq("active")
                    expect(element.status).to.eq("active")



                });
            });

    });


    //POST REQUEST WILL ADD A NEW USER 

    it('POST /users', () => {
        const data = {
            email: `test-${Math.floor(Math.random() * 9999)}@dtest.com`,
            name: "Yousaf",
            gender: "male",
            status: "active",
        };

        return request
            .post('users')
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                console.log(res.body);

                expect(res.body.email).to.be.eq(data.email);
                expect(res.body.status).to.be.eq(data.status);
                expect(res.body.name).to.be.eq(data.name);
                expect(res.body.gender).to.be.eq(data.gender);


                //WE CAN ALSO USE THIS TO VERIFY ALL FIELDS instead of adding all expect one by one
                expect(res.body).to.deep.include(data);

            });
    }

    );


    //THIS CODE IF FOR PUT REQUEST 
    //it.only command only execute this test case and ignore all others 'it' 
    it('PUT /user/:id', () => {
        const data = {
            status: "inactive",
            name: "Yousaf Raza Shah"
        };

        return request
            .put('users/3263')
            .set('Authorization', `Bearer ${TOKEN}`)
            .send(data)
            .then((res) => {
                console.log(res.body);
                expect(res.body.status).to.be.eq('inactive');

            })


    });


    //THIS IS DELETE REQUEST 
    //it.only command only execute this test case and ignore all others 'it' 
    it.only('DELETE /user/:id', () => {

        return request
            .delete('users/3268')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                //        console.log(res.body);
                expect(res.body).to.be.eq(null);

            })


    });

});



