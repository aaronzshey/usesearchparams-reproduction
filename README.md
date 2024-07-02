# usesearchparams-reproduction
## useSearchParams does not export a component, but still requires Suspense wrapper

### Reproducing the Issue:
- Clone this repo: `git clone git@github.com:aaronzshey/usesearchparams-reproduction.git`
- Enter the repo: `cd usesearchparams-reproduction`
- Install and build: `npm install && npm build`
- Observe the following error:

  ```js
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (0/5)  [==  ] ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
```
