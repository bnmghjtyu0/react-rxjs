import React from "react";

import { componentFromStreamWithConfig } from "recompose";
import { from, interval } from "rxjs";
import {
  map,
  startWith,
  distinctUntilChanged,
  switchMap,
  timestamp
} from "rxjs/operators";

const componentFromStream = componentFromStreamWithConfig({
  fromESObservable: from,
  toESObservable: stream => stream
});

export default componentFromStream(props$ => {
  const intervalTime$ = props$.pipe(
    map(props => props.intervalTime),
    distinctUntilChanged()
  );
  intervalTime$.subscribe(console.log);
  const timestamp$ = intervalTime$.pipe(
    switchMap(intervalTime => interval(intervalTime)),
    startWith(null),
    map(() => new Date())
  );
  return timestamp$.pipe(
    map(timestamp => <h2>The time is {timestamp.toLocaleTimeString()}</h2>)
  );
});
