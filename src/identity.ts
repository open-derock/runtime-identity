import * as moment from 'moment';

export interface RuntimeIdentity {
  name: string;
  version: string;
  description: string;
  author: string;
  uptime: {
    startedAt: string;
    duration: string;
  };
  release: {
    builtAt: string;
    duration: string;
    git: {
      branch: string;
      shortSHA: string;
    };
  };
}
const START_DATE = new Date();

const { RELEASE_AT, RELEASE_GIT_BRANCH, RELEASE_GIT_SHORT_SHA } = process.env;

export function getRuntimeIdentity(): Partial<RuntimeIdentity> {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const {
    name,
    version,
    description,
    author,
  } = require(`${process.cwd()}/package.json`);

  return {
    name,
    version,
    description,
    author,
    uptime: {
      startedAt: START_DATE.toISOString(),
      duration: moment(START_DATE).fromNow(),
    },
    release: {
      builtAt: RELEASE_AT,
      duration: moment(RELEASE_AT).fromNow(),
      git: {
        branch: RELEASE_GIT_BRANCH,
        shortSHA: RELEASE_GIT_SHORT_SHA,
      },
    },
  };
}
