var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint jsx-quotes: 0 */
import React from 'react';

var Logo = function Logo(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 128 56", fill: "none", width: "1em", height: "1em" }, props),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.622 55.387c.051.23-.051.409-.308.409h-.666c-.128 0-.256-.128-.308-.23l-1.486-8.553h-.077L6.702 55.77c-.026.102-.18.179-.282.179h-.308c-.102 0-.256-.077-.282-.179l-3.1-8.757h-.077l-1.461 8.553c-.026.128-.154.23-.308.23H.32c-.256 0-.358-.153-.307-.409L2.166 44.23c.025-.128.179-.23.307-.23h.256c.129 0 .257.077.282.179l3.306 9.14h.077l3.255-9.14c.026-.102.154-.179.282-.179h.256c.128 0 .257.102.308.23l2.127 11.157zm14.044-.025c.103.204-.026.434-.282.434h-.666c-.154 0-.256-.102-.282-.179l-1.23-2.732h-5.92l-1.205 2.732c-.025.077-.128.18-.282.18h-.666c-.256 0-.384-.205-.282-.435l5.074-11.157c.052-.103.129-.18.282-.18h.128c.154 0 .231.077.282.18l5.05 11.157zm-2.921-3.523c-.82-1.813-1.615-3.626-2.435-5.439h-.128l-2.435 5.439h4.998zm9.149-2.554c-1.41-.587-2.256-1.225-2.256-2.349 0-.69.539-1.838 2.307-1.838 1.025 0 2.076.69 2.178.766.257.153.436.076.59-.153.077-.102.128-.205.205-.307.205-.306 0-.51-.103-.561 0 0-1.204-.843-2.844-.843-2.64 0-3.537 1.813-3.537 2.962 0 1.89 1.102 2.63 2.921 3.447 1.923.791 2.922 1.48 2.922 2.63 0 .97-.871 1.838-2.23 1.838-1.486 0-2.69-1.175-2.819-1.251-.23-.205-.41-.077-.59.153a2.709 2.709 0 0 1-.255.306c-.205.306-.026.46.102.562.205.204 1.538 1.353 3.511 1.353 1.948 0 3.588-1.251 3.588-2.987.026-1.966-1.435-2.809-3.69-3.728zm13.608-5.106H39.43a.311.311 0 0 0-.308.306v.485c0 .153.128.307.308.307h2.896v10.187c0 .178.154.306.307.306h.641c.18 0 .308-.153.308-.306V45.277h2.896c.179 0 .307-.154.307-.307v-.485c.026-.153-.102-.306-.282-.306zm10.687 0h-6.56a.311.311 0 0 0-.308.306v10.979c0 .178.128.306.307.306h6.561c.18 0 .308-.153.308-.306v-.485a.311.311 0 0 0-.308-.307h-5.612v-4.238h4.792a.311.311 0 0 0 .308-.306v-.485c0-.154-.154-.307-.308-.307h-4.792v-4.06h5.587c.179 0 .307-.153.307-.306v-.485c.026-.153-.102-.306-.282-.306zm10.43 6.92l2.282 4.212a.315.315 0 0 1-.282.485h-.846c-.154 0-.23-.077-.256-.153l-2.204-4.392h-3.204v4.239a.311.311 0 0 1-.307.306h-.64a.311.311 0 0 1-.309-.306V44.51c0-.179.129-.306.308-.306h4.306c1.999 0 3.639 1.557 3.639 3.523-.026 1.506-1.025 2.783-2.486 3.37zm1.154-3.371c0-1.251-1.127-2.35-2.409-2.35h-3.229v4.775h3.23a2.424 2.424 0 0 0 2.408-2.425zm14.454 5.72c-.102-.077-.23-.077-.41.05-.871.664-1.742 1.251-3.178 1.251-2.64 0-4.638-2.195-4.638-4.774s2.024-4.775 4.638-4.775c1.128 0 2.307.485 3.178 1.251.18.18.308.18.436.026l.461-.46a.304.304 0 0 0-.025-.46c-1.128-.97-2.358-1.531-4.024-1.531-3.332 0-6.023 2.68-6.023 6 0 3.319 2.691 5.949 6.023 5.949 1.486 0 2.921-.51 4.05-1.609.127-.127.153-.357.025-.46l-.513-.459zm10.79 1.224h-4.793V44.485a.311.311 0 0 0-.307-.306h-.641a.311.311 0 0 0-.307.306v10.979c0 .178.128.306.307.306h5.766c.18 0 .308-.153.308-.306v-.485c0-.154-.154-.307-.333-.307zm13.506.69c.102.204-.026.434-.282.434h-.666c-.154 0-.257-.102-.282-.179l-1.23-2.732h-5.92l-1.205 2.732c-.026.077-.128.18-.282.18h-.666c-.257 0-.385-.205-.282-.435l5.074-11.157c.051-.103.128-.18.282-.18h.154c.154 0 .23.077.282.18l5.023 11.157zm-2.896-3.523c-.82-1.813-1.615-3.626-2.435-5.439h-.128l-2.435 5.439h4.998zm9.149-2.554c-1.41-.587-2.255-1.225-2.255-2.349 0-.69.538-1.838 2.306-1.838 1.025 0 2.076.69 2.179.766.256.153.435.076.589-.153.077-.102.128-.205.205-.307.205-.306 0-.51-.102-.561 0 0-1.205-.843-2.845-.843-2.64 0-3.537 1.813-3.537 2.962 0 1.89 1.102 2.63 2.922 3.447 1.922.791 2.921 1.48 2.921 2.63 0 .97-.871 1.838-2.229 1.838-1.487 0-2.691-1.175-2.819-1.251-.231-.205-.41-.077-.59.153-.077.102-.179.204-.256.306-.205.306-.026.46.102.562.205.204 1.538 1.353 3.511 1.353 1.948 0 3.588-1.251 3.588-2.987 0-1.966-1.435-2.809-3.69-3.728zm10.533 0c-1.409-.587-2.255-1.225-2.255-2.349 0-.69.538-1.838 2.306-1.838 1.026 0 2.076.69 2.179.766.256.153.436.076.589-.153.077-.102.128-.205.205-.307.205-.306 0-.51-.102-.561 0 0-1.205-.843-2.845-.843-2.64 0-3.537 1.813-3.537 2.962 0 1.89 1.102 2.63 2.922 3.447 1.922.791 2.922 1.48 2.922 2.63 0 .97-.872 1.838-2.23 1.838-1.486 0-2.691-1.175-2.819-1.251-.231-.205-.41-.077-.59.153-.076.102-.179.204-.256.306-.205.306-.026.46.103.562.205.204 1.537 1.353 3.511 1.353 1.947 0 3.588-1.251 3.588-2.987.025-1.966-1.436-2.809-3.691-3.728zM67.88 26.236l-.308.557L64 26.045l-3.572.748-.307-.557 3.865-.802 3.893.802zm-20.987-.938l7.535-3.874.112-.775-7.521 3.875-.126.774zM64 30.07l-1.772.11.307.584L64 30.68l1.465.068.307-.584L64 30.069zm-16.912-5.94l7.591-4.445.126-.815-7.563 4.431-.154.83zm13.744 3.426l.307.57 2.875-.448 2.874.449.307-.571-3.167-.49-3.196.49zm2.094 3.915c.153.244.404.53 1.074.53s.921-.286 1.075-.53h-2.15zM64 28.602l-2.47.258.307.57L64 29.2l2.163.23.307-.57-2.47-.258zm-17.289-2.244l7.493-3.344.112-.734-7.465 3.33-.14.748zm.168 4.976h5.344c.419 0 .768-.3.838-.64l-6.824.395c.168.15.391.245.642.245zM53.451.435a.755.755 0 0 0-.279-.271L50.577 4.01l-.293 1.658L53.619.735l-.168-.3zm-6.907 26.889l7.437-2.841.098-.707-7.423 2.841-.112.707zm-.307 3.765l6.88-.734.083-.612-7.2.761a.93.93 0 0 0 .237.585zm.154-2.881l7.395-2.38.098-.68-7.382 2.366-.111.694zm-.377 2.147v.123l7.256-1.129.098-.625-7.256 1.128-.098.503zm.237-1.332l7.354-1.93.097-.667-7.34 1.93-.11.667zm-.126.761l7.312-1.522.098-.64-7.298 1.523-.112.639zM56.898 6.702l-8.247 8.387-.195 1.156 8.777-8.932-.335-.611zm-.907-1.659l-6.935 7.776-.223 1.264 7.506-8.415-.348-.625zm1.828 3.317l-9.517 8.741-.18 1.074L58.14 8.958l-.321-.598zm-2.75-4.975l-5.58 6.878-.238 1.373 6.181-7.612-.362-.64zm3.656 6.62l-10.73 8.89-.167.993 11.219-9.299-.321-.584zM51.959 0c-.363 0-.767.313-.81.707l-.222 1.305L52.167 0h-.209zm2.205 1.727L49.99 7.354l-.265 1.51 4.786-6.471-.35-.666zm5.47 9.937l-11.917 8.85-.167.937 12.405-9.216-.321-.571zm3.641 6.592l-5.986 2.678.293.558 6-2.678-.307-.558zM64 19.97l-6 2.298.293.557L64 20.649l5.707 2.175.293-.557-6-2.298zm-5.289 3.63l.293.558L64 22.552l4.995 1.605.293-.558L64 21.9l-5.289 1.7zm1.842-10.277l-13.088 8.66-.153.883 13.548-8.972-.307-.571zm1.814 3.29l-5.804 2.99.307.558 5.804-2.99-.307-.558zM64 23.708l-4.59 1.21.292.557 4.284-1.129 4.284 1.129.293-.558L64 23.707zm-2.54-8.741l-5.609 3.29.307.57 5.61-3.29-.308-.57zm19.507 9.543l-7.52-3.874.111.775 7.535 3.874-.126-.775zm-.209-1.21l-7.563-4.431.126.815 7.59 4.445-.153-.829zm.405 2.298l-7.465-3.33.111.733 7.493 3.344-.14-.747zm-5.386 5.736h5.344a.897.897 0 0 0 .628-.245l-6.823-.394a.902.902 0 0 0 .85.639zm1.66-27.31l-2.61-3.86a.754.754 0 0 0-.278.271l-.168.3 3.335 4.934-.279-1.645zm3.893 22.579l-7.423-2.841.098.707 7.437 2.84-.112-.706zm-6.544 3.14l.084.612 6.879.734a.72.72 0 0 0 .223-.585l-7.186-.76zm6.698-2.229l-7.368-2.365.098.68 7.395 2.378-.125-.693zm.502 2.841l-.084-.516-7.256-1.129.098.626L82 30.464c-.014-.027-.014-.068-.014-.109zm-.349-1.998l-7.34-1.93.098.665 7.354 1.93-.112-.665zm.126.774l-7.298-1.522.098.639 7.311 1.522-.111-.639zM79.349 15.09l-8.247-8.387-.335.611 8.777 8.932-.195-1.156zm-.391-2.27l-6.935-7.776-.349.625 7.507 8.415-.223-1.264zm.74 4.282l-9.503-8.74-.335.597 10.019 9.217-.181-1.074zm-1.187-6.838l-5.58-6.878-.35.639 6.182 7.612-.252-1.373zm1.494 8.632l-10.73-8.89-.321.584 11.218 9.299-.167-.993zM76.865.707c-.042-.394-.46-.707-.81-.707h-.195l1.242 2.012-.237-1.305zm1.144 6.647l-4.172-5.627-.363.666 4.786 6.47-.25-1.509zm2.275 13.173l-11.917-8.85-.32.571 12.404 9.217-.167-.938zm-15.865-1.713l6 2.678.293-.558-5.986-2.678-.307.558zm16.116 3.167l-13.075-8.66-.307.572 13.55 8.972-.168-.884zm-15.21-4.812l5.805 2.99.307-.556-5.804-2.991-.307.557zm.907-1.645l5.61 3.29.307-.571-5.61-3.29-.307.571z",
      fill: "currentColor"
    })
  );
};

export default Logo;