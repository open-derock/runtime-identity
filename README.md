# Nodejs Runtime Identity

We need to identify who is running already. this package gives some info about that. some thing like:

```json
{
  "name": "my-nodejs-app", // `name` attribute from ./package.json
  "version": "1.1.0", // `version` attribute from ./package.json
  "description": "", // `descritption` attribute from ./package.json
  "author": "", // `author` attribute from ./package.json
  "uptime": {
    "startedAt": "2020-12-02T05:51:00.188Z", // when the app started
    "duration": "18 minute ago" // duration since the app started
  },
  "release": {
    "builtAt": "2020-12-02T05:49:36Z", // when the docker image built. it must pass in the environment variables as `RELEASE_AT` as an ISO date string
    "duration": "54 minutes ago", // duration since the docker image built
    "git": {
      "branch": "develop", // the git branch of the docker image. it must pass in the environment variables as `RELEASE_GIT_BRANCH`
      "tag": "v1.1.0", // the git tag of the docker image. if the source of the CI job were a git tag. it must pass in the environment variables as `RELEASE_GIT_TAG`
      "shortSHA": "4fbd3182" // the git short SHA key of the docker image. it must pass in the environment variables as `RELEASE_GIT_SHORT_SHA`
    }
  }
}
```
