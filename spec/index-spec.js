const using = require('jasmine-data-provider');

const token = require('../src');

describe("Token Auth", () => {
  using([
    {headers:{authorization: "Bearer token"}},
    {headers:{authorization: "bearer token"}},
  ], (req) => {
    it("should call the authenticate method", (done) => {
      token((tkn) => {
        return Promise.resolve({username: "test", password: "hello"});
      })(req).then((data) => {
        expect(data).toEqual({username: "test", password: "hello"});
        done();
      })
    });
  });

  using([
    {headers:{authorization: "Basic kill!me"}},
    {headers:{authorization: "smethingstrng"}},
    {headers:{authorization: "basic dGVzdDpoZWxsbw=="}},
    {headers:{authorization: "Basic dGVzdDpoZWxsbw=="}},
  ], (req) => {
    it("should reject the promise on failures", (done) => {
      token(() => {})(req)
        .catch((err) => {
          expect(err).toEqual({error: "Invalid token auth token form"});
          done();
        });
    });
  });
});
