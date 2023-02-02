import { expect } from "chai";
import supertest from "supertest";
const request = supertest('https://URL');

const TOKEN = '';

describe('app library', () => {

    it('GET /app library', () => {
        const responseData = {
            "data": [
                {
                    app_name: "Salesforce",
                    app_description: "Enable users to take calls in call pop",
                    key: "salesforce",
                    visible: false
                },
                {
                    app_name: "Enterprise SSO",
                    app_description: "Manage app logins",
                    key: "enterprise_sso",
                    visible: false
                },
                {
                    app_name: "Zapier",
                    app_description: "User event connectivity",
                    key: "zapier",
                    visible: false
                }
            ]
        }
        // request
        //     .get(`users?access-token=${TOKEN}`).end((err,res)=>{
        //        expect(res.body.id).to.not.be.null;
        //        done();
        //     });         

        return request
            .get('app_library')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {

                console.log("data>" + res.data)
                console.log("body>" + res.body.key)


                //    expect(res.data).to.be.null;    
                expect(res.body).to.deep.include(responseData);

                // expect(res.data.key).to.be.eq('salesforce');
                // expect(res.data.key).to.be.eq('enterprise_sso');


            });
    });




    it('get/ SalesForce', () => {


        return request
            .get('app_library/salesforce/')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.body).to.not.be.null;
                expect(res.body.data.data.type).to.be.eq('integrationSalesforce');
                // expect(res.data.key).to.be.eq('enterprise_sso');


            });
    });


    it('get/ enterpriseSSO', () => {


        return request
            .get('app_library/enterprise_sso/')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.body).to.not.be.null;
                expect(res.body.data.type).to.be.eq('enterpriseSso');
                // expect(res.data.key).to.be.eq('enterprise_sso');


            });
    });


    it('get/ SalesForce Status', () => {


        return request
            .get('app_library/salesforce/status')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.body).to.not.be.null;
                expect(res.body.data.active).to.be.eq(false);
                // expect(res.data.key).to.be.eq('enterprise_sso');


            });
    });


    it('get/ EnterpriseSSO Status', () => {


        return request
            .get('app_library/enterprise_sso/status')
            .set('Authorization', `Bearer ${TOKEN}`)
            .then((res) => {
                expect(res.body).to.not.be.null;
                expect(res.body.data.active).to.be.eq(true);
                // expect(res.data.key).to.be.eq('enterprise_sso');


            });
    });













});



