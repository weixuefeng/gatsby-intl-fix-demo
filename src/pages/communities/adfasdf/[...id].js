import React from 'react'

// export default function Profile() {
//   console.log(window.location.pathname)
//   return (
//     <div>Profile</div>
//   )
// }


export default function ImagePage({ params }) {
  const param = params[`*`]
  // When visiting a route like `image/hello/world`,
  // the value of `param` is `hello/world`.
  return (
    <div>Profile</div>
  )
}