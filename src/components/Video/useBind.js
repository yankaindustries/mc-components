import { useEffect } from 'react'


const runWith = (element, method, events) =>
  Object.keys(events).forEach(key =>
    element[method](key, events[key]),
  )


const useBind = (element, events, dependencies = []) => {
  useEffect(
    () => {
      runWith(element.current, 'addEventListener', events)
      return () => runWith(element.current, 'removeEventListener', events)
    },
    [element.current, ...dependencies],
  )
}


export default useBind
