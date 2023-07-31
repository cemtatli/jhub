const GitHubIcon = ({ size = 22, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className="mr-2"
      viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
    </svg>
  )
}
const GoogleIcon = ({ size = 22, ...props }) => {
  return (
    <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="mr-2">
      <path d="M22.2 10.4l-0.1-0.5H12.3v4.2H18.1c-0.6 2.9-3.4 4.4-5.7 4.4-1.7 0-3.4-0.7-4.6-1.9a6.6 6.6 0 0 1-1.9-4.6c0-1.7 0.8-3.5 1.9-4.6s2.9-1.8 4.6-1.8c2 0 3.4 1 3.8 1.5l3-2.9C18.3 3.4 16 1.5 12.3 1.5c-2.8 0-5.6 1.1-7.6 3.1C2.7 6.5 1.7 9.4 1.7 12s1 5.3 2.9 7.3c2 2.1 4.9 3.2 7.9 3.2 2.7 0 5.3-1.1 7.1-3 1.8-1.9 2.7-4.5 2.7-7.2 0-1.2-0.1-1.8-0.1-1.9z" />
    </svg>
  )
}
const ArrowIcon = ({ size = 12, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
const BackIcon = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="mr-2"
      strokeLinejoin="round">
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
    </svg>
  )
}
const LoadingIcon = ({ size = 22, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="mr-2 animate-spin"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="6" />
      <line x1="12" x2="12" y1="18" y2="22" />
      <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
      <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
      <line x1="2" x2="6" y1="12" y2="12" />
      <line x1="18" x2="22" y1="12" y2="12" />
      <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
      <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
    </svg>
  )
}
const NotFoundIcon = ({ ...props }) => {
  return (
    <svg {...props} width="180" height="97" viewBox="0 0 180 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect data-v-5ea6dcaf="" y="33" width="180" height="64" rx="8" fill="#FFFBEB" />
      <path
        opacity="0.1"
        d="M23.4137 89.3206L52.3461 67.9657C52.6167 67.766 52.9441 67.6582 53.2804 67.6582H150.363C151.92 67.6582 152.531 69.6773 151.236 70.5408L119.302 91.83C116.787 93.5067 113.816 94.3665 110.794 94.292L24.3092 92.1595C22.8111 92.1225 22.2079 90.2105 23.4137 89.3206Z"
        fill="#9CA3AF"
      />
      <path
        d="M71.971 5.24414C72.3235 6.51566 72.5266 8.48723 72.155 10.6502M65.8985 19.5544C69.9465 17.1676 71.6282 13.7166 72.155 10.6502M72.155 10.6502C70.3891 10.6502 66.2181 11.5407 63.6613 15.1023C61.1045 18.664 56.2039 18.9184 54.0732 18.6004C58.5477 25.2785 71.971 28.5858 74.5278 12.5583"
        stroke="#FFBC00"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72.1685 29.1094L21.5566 59.0045C54.9133 86.0674 93.8468 89.8611 109.144 88.3751L153.462 45.8926C153.462 45.8926 109.406 46.9415 72.1685 29.1094Z"
        fill="white"
        stroke="#9CA3AF"
        strokeWidth="1.66667"
        strokeLinejoin="round"
      />
      <path
        d="M81.5356 40.4985L74.1126 38.1128L39.9504 60.985C39.9504 60.985 44.8621 64.1509 46.8828 64.436L81.5356 40.4985Z"
        fill="#EFEFEF"
      />
      <path
        d="M96.5419 45.1509L89.0261 43.0763L55.8459 67.3512C55.8459 67.3512 60.8851 70.3098 62.9159 70.5105L96.5419 45.1509Z"
        fill="#EFEFEF"
      />
      <path
        d="M112.388 49.2816L104.784 47.5593L84.1253 64.5845C84.1253 64.5845 89.2969 67.3052 91.3348 67.4111L112.388 49.2816Z"
        fill="#EFEFEF"
      />
      <ellipse cx="81.8708" cy="71.854" rx="5.76923" ry="4.1958" fill="#EFEFEF" />
      <path
        d="M118.685 56C118.975 57.0485 119.141 58.6744 118.836 60.458M113.703 67.8007C117.024 65.8325 118.404 62.9866 118.836 60.458M118.836 60.458C117.387 60.458 113.965 61.1923 111.867 64.1294C109.769 67.0664 105.748 67.2762 104 67.014C107.671 72.521 118.685 75.2483 120.783 62.0315"
        stroke="#FFBC00"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="92.3138"
        cy="40.6245"
        r="15.4167"
        transform="rotate(-7.15615 92.3138 40.6245)"
        fill="white"
        fillOpacity="0.5"
        stroke="#9CA3AF"
        strokeWidth="1.66667"
      />
      <path
        d="M107.923 35.4231L106.666 32.3359L125.028 24.8588C125.881 24.5117 126.853 24.9214 127.2 25.7739C127.548 26.6264 127.138 27.5989 126.285 27.946L107.923 35.4231Z"
        fill="#9CA3AF"
        stroke="#9CA3AF"
        strokeWidth="0.833333"
      />
    </svg>
  )
}

export { GoogleIcon, GitHubIcon, NotFoundIcon, BackIcon, LoadingIcon, ArrowIcon }
