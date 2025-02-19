import { wildcardTextMatcher } from '../wildcard-text-matcher';

export function getEnvironment(): string {
  if (wildcardTextMatcher(location.origin, 'http://localhost:8080*')) return 'docker';
  else if (wildcardTextMatcher(location.origin, 'http://localhost*')) return 'local';
  else if (wildcardTextMatcher(location.origin, 'http://*.elasticbeanstalk.com')) return 'aws';
  else {
    throw Error(`Undefined base URL: ${location.origin}`);
  }
}
