import { expect } from "chai";
import supertest from "supertest";
const request = supertest('https://jagoda.dev.lzy.net/v4/account_admin/');

const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhFUXNaM0JDenkycUlrSmpkOFphWSJ9.eyJhcHBfbWV0YWRhdGEiOnsiYWNjb3VudF9pZCI6MSwibG9jYXRpb25faWQiOjgyOTE3LCJwYWNrYWdlIjoicHJvIiwicGVyc29uX2lkIjo0ODU3MTUsInJvbGUiOiJhY2NvdW50X2FkbWluIiwic3RhZmZfcm9sZSI6ImFkbWluIiwidGltZV96b25lIjoiUGFjaWZpYyBUaW1lIChVUyAmIENhbmFkYSkiLCJ0d29fZmFjdG9yX2F1dGgiOiJ1bmRlZmluZWQiLCJ1c2VyX2dyb3VwcyI6WyJiaWxsaW5nX3BsYW5zX21hbmFnZW1lbnQiLCJiaWxsaW5nX3JlcG9ydHMiLCJkaWRfbWFuYWdlbWVudCIsImludm9pY2VfbWFuYWdlbWVudCIsIm9ubGluZV9wYXltZW50X21hbmFnZW1lbnQiLCJzZXNzaW9uX21hbmFnZW1lbnQiLCJkZXZfdGVhbSIsInByb2R1Y3RfZGV2IiwiY3VzdG9tZXJfc2VydmljZV9tYW5hZ2VyIiwibmV0b3BzX3RlYW0iLCJtYXJrZXRpbmciLCJzYWxlc2ZvcmNlX2ZlYXR1cmVzIiwiZWFybHlfYWNjZXNzIiwiZW50ZXJwcmlzZV9zc29fbWFuYWdlbWVudCJdfSwiaXNzIjoiaHR0cHM6Ly9kZXZlbG9wbWVudC1icm9hZHZvaWNlLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw0MjhhMzE1YS1lM2NkLTRkZDAtYTg2MS0wN2QxMTExMmQzYTgiLCJhdWQiOlsiaHR0cHM6Ly9hcHAuYnJvYWR2b2ljZS5jb20iLCJodHRwczovL2RldmVsb3BtZW50LWJyb2Fkdm9pY2UudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY2OTg4MzQ4OSwiZXhwIjoxNjY5OTY5ODg5LCJhenAiOiJYaVVMSGVZVlNvTEw2ZDU1aGdDV3FzQzltZE41ck1adSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6WyJhY2NvdW50X2FkbWluOmFwaV9rZXk6Y3JlYXRlIiwiYWNjb3VudF9hZG1pbjphcGlfa2V5OmRlbGV0ZSIsImFjY291bnRfYWRtaW46YXBpX2tleTpsaXN0IiwiYWNjb3VudF9hZG1pbjphcHBfbGlicmFyeTplbnRlcnByaXNlX3NzbyIsImFjY291bnRfYWRtaW46YXBwX2xpYnJhcnk6aW5kZXgiLCJhY2NvdW50X2FkbWluOmFwcF9saWJyYXJ5OnNhbGVzZm9yY2UiLCJhY2NvdW50X2FkbWluOmxvY2F0aW9uOmxpc3QiLCJhY2NvdW50X2FkbWluOnBlb3BsZTpsaXN0IiwiaW50ZWdyYXRpb25fbWFuYWdlcjppbnRlZ3JhdGlvbiIsImludGVncmF0aW9uX21hbmFnZXI6aW50ZWdyYXRpb25fc2NvcGUiXX0.mKUuHqhwGCDOQ7oDrVyKx5hRnBJuKU9vhFleptzURyli7SleLzPJWm7lD9yVnSuoqWl-mlMRDMWYzCUFOeZ8maA3alEmHpjbwmLiyD_h2eozwVHgj4r85MDOQN4wo0FwQJCpaldu_Q8ucsjeId-HOu8-H3qtAZRgLK2wkOOP9GONDkPl8dIGz_3DNX3Ne9n-aD7sWePuR6naWuqjT0N8MzAdPAeOCDzIIe1tmPTOE7lxDQDYNG2gBnRjN9WVABubOjluMYfkHYRBLdlFNPGudSOugPGTyHPOhtTl9e8hzkzaOGA4loNYZ3SLKFbE9fcUu7KmQGmFpdfEOoVL1q-p3Q';

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



