dynamic import issue
===

Get Start
---------

```bash
$ yarn
$ yarn build
$ serve dist # Run a stati serve on dist
```

Expected Behavior
---

The content `Loaindg...` will be changed to `App Loaded!`


Current Behavior
---

It doesn't work as expecting on old browser, specificlly, on Androind 4.3 and below. That's because `MCEP` using `onload` event to resolve promise which not supported and cause the promise pendding forever.


https://pie.gd/test/script-link-events/