import React from 'react';

export function MenuBarClose() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="12" viewBox="0 0 41 12" fill="none">
        <path d="M0 10.8351H41" stroke="url(#paint0_linear_688_46472)" />
        <line x1="12" y1="0.835144" x2="41" y2="0.835144" stroke="url(#paint1_linear_688_46472)" />
        <defs>
            <linearGradient id="paint0_linear_688_46472" x1="41" y1="11.8351" x2="-7.15919e-09" y2="11.8351" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8C51" />
                <stop offset="1" stopColor="#F36A24" />
            </linearGradient>
            <linearGradient id="paint1_linear_688_46472" x1="41" y1="1.33515" x2="12" y2="1.33514" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8C51" />
                <stop offset="1" stopColor="#F36A24" />
            </linearGradient>
        </defs>
    </svg>
    )
}

export function MenuBarOpen() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M1 1L16.5563 16.5563" stroke="url(#paint0_linear_688_46211)" />
        <line x1="0.646447" y1="16.2028" x2="16.2028" y2="0.646494" stroke="url(#paint1_linear_688_46211)" />
        <defs>
            <linearGradient id="paint0_linear_688_46211" x1="15.8493" y1="17.2634" x2="0.292928" y2="1.70707" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8C51" />
                <stop offset="1" stopColor="#F36A24" />
            </linearGradient>
            <linearGradient id="paint1_linear_688_46211" x1="16.5564" y1="1.00005" x2="1" y2="16.5564" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8C51" />
                <stop offset="1" stopColor="#F36A24" />
            </linearGradient>
        </defs>
    </svg>
)}

export function ChatIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
        <path d="M24 12.3351C24 18.9626 18.6274 24.3351 12 24.3351C10.7825 24.3351 9.6073 24.1538 8.5 23.8167C7.61946 23.5486 3.52946 25.2003 3.52946 25.2003C3.52946 25.2003 4.26502 21.5682 3.52946 20.8351C1.34923 18.6624 0 15.6563 0 12.3351C0 5.70773 5.37258 0.335144 12 0.335144C18.6274 0.335144 24 5.70773 24 12.3351Z" fill="white" />
        <circle cx="8" cy="12.3351" r="1" fill="#27303F" />
        <circle cx="12" cy="12.3351" r="1" fill="#27303F" />
        <circle cx="16" cy="12.3351" r="1" fill="#27303F" />
    </svg>
)}

export function HomeIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="36" viewBox="0 0 41 36" fill="none">
        <path d="M15.8188 33.8257V23.1304H24.4746V33.8257C24.4746 35.0022 25.4484 35.9647 26.6386 35.9647H33.1304C34.3206 35.9647 35.2944 35.0022 35.2944 33.8257V18.8523H38.9731C39.9685 18.8523 40.4446 17.6331 39.6872 16.9914L21.5965 0.884325C20.7742 0.157048 19.5191 0.157048 18.6968 0.884325L0.606145 16.9914C-0.129601 17.6331 0.32483 18.8523 1.32025 18.8523H4.99898V33.8257C4.99898 35.0022 5.97276 35.9647 7.16294 35.9647H13.6548C14.845 35.9647 15.8188 35.0022 15.8188 33.8257Z" fill="white"/>
    </svg>
)}

export function PeopleIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
        <path d="M13.8747 12.9083C15.7013 12.9083 17.4531 13.6339 18.7447 14.9255C20.0363 16.2171 20.7619 17.9689 20.7619 19.7955V28.0603H6.98737V19.7955C6.98737 17.9689 7.713 16.2171 9.00461 14.9255C10.2962 13.6339 12.048 12.9083 13.8747 12.9083ZM4.62917 17.0489C4.40996 17.7883 4.28047 18.5514 4.24348 19.3217L4.23246 19.7955V28.0603H0.100098V21.8617C0.0998266 20.6738 0.538167 19.5275 1.33104 18.6429C2.12391 17.7583 3.21549 17.1975 4.39638 17.0682L4.62917 17.0489ZM23.1201 17.0489C24.3459 17.1236 25.4971 17.6632 26.3387 18.5575C27.1803 19.4519 27.649 20.6336 27.6492 21.8617V28.0603H23.5168V19.7955C23.5168 18.841 23.3791 17.9194 23.1201 17.0489ZM4.92119 8.7759C5.8345 8.7759 6.7104 9.13871 7.35621 9.78452C8.00202 10.4303 8.36483 11.3062 8.36483 12.2195C8.36483 13.1328 8.00202 14.0088 7.35621 14.6546C6.7104 15.3004 5.8345 15.6632 4.92119 15.6632C4.00788 15.6632 3.13198 15.3004 2.48617 14.6546C1.84036 14.0088 1.47755 13.1328 1.47755 12.2195C1.47755 11.3062 1.84036 10.4303 2.48617 9.78452C3.13198 9.13871 4.00788 8.7759 4.92119 8.7759ZM22.8281 8.7759C23.7414 8.7759 24.6173 9.13871 25.2631 9.78452C25.9089 10.4303 26.2717 11.3062 26.2717 12.2195C26.2717 13.1328 25.9089 14.0088 25.2631 14.6546C24.6173 15.3004 23.7414 15.6632 22.8281 15.6632C21.9148 15.6632 21.0389 15.3004 20.3931 14.6546C19.7473 14.0088 19.3845 13.1328 19.3845 12.2195C19.3845 11.3062 19.7473 10.4303 20.3931 9.78452C21.0389 9.13871 21.9148 8.7759 22.8281 8.7759ZM13.8747 0.511169C15.3359 0.511169 16.7374 1.09167 17.7707 2.12496C18.804 3.15825 19.3845 4.5597 19.3845 6.02099C19.3845 7.48229 18.804 8.88373 17.7707 9.91702C16.7374 10.9503 15.3359 11.5308 13.8747 11.5308C12.4134 11.5308 11.0119 10.9503 9.97862 9.91702C8.94533 8.88373 8.36483 7.48229 8.36483 6.02099C8.36483 4.5597 8.94533 3.15825 9.97862 2.12496C11.0119 1.09167 12.4134 0.511169 13.8747 0.511169Z" fill="white"/>
    </svg>
)}

export function SpeakerIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path d="M1.69997 9.8051V9.84687C1.69848 10.1078 1.60425 10.3598 1.43413 10.5577V10.5608C1.09234 10.9647 0.687256 11.6875 0.687256 12.8432C0.687256 13.8908 1.02272 14.6301 1.42654 15.1162C1.60371 15.3318 1.70038 15.6023 1.69997 15.8814C1.69997 16.4186 1.91337 16.9337 2.29321 17.3136C2.67305 17.6934 3.18823 17.9068 3.7254 17.9068H4.23176C4.36606 17.9068 4.49485 17.8535 4.58981 17.7585C4.68477 17.6636 4.73812 17.5348 4.73812 17.4005V8.28602C4.73812 8.15173 4.68477 8.02293 4.58981 7.92797C4.49485 7.83301 4.36606 7.77966 4.23176 7.77966H3.7254C3.18823 7.77966 2.67305 7.99306 2.29321 8.3729C1.91337 8.75274 1.69997 9.26792 1.69997 9.8051Z" fill="white"/>
        <path d="M27.2828 10.4729L27.2239 10.4621C27.1661 10.4511 27.1139 10.4202 27.0763 10.3748C27.0388 10.3294 27.0182 10.2723 27.0182 10.2134V2.58954C27.0182 1.78949 26.4872 1.07046 25.696 0.797031C24.9415 0.53689 24.1554 0.748927 23.6908 1.33694C22.7025 2.51715 21.6161 3.61162 20.4432 4.60864C18.9475 5.87454 17.5164 6.77649 16.2024 7.28664C16.1066 7.32318 16.0241 7.38794 15.9659 7.47237C15.9077 7.5568 15.8765 7.65691 15.8765 7.75945V17.5904C15.8766 17.7884 15.9348 17.9819 16.0438 18.1472C16.1528 18.3124 16.3079 18.4421 16.4898 18.5202C17.7139 19.0449 19.0368 19.9019 20.4141 21.0697C21.5958 22.0758 22.6901 23.1802 23.6851 24.3712C23.8446 24.5712 24.048 24.7316 24.2797 24.84C24.5114 24.9483 24.765 25.0017 25.0207 24.9959C25.2454 24.9949 25.4685 24.9577 25.6815 24.8857C26.4935 24.6161 27.0182 23.923 27.0182 23.1224V15.4719C27.0183 15.4122 27.0395 15.3544 27.0781 15.3087C27.1166 15.2631 27.1701 15.2325 27.229 15.2225L27.2828 15.2137C27.8917 15.0485 29.0437 14.3415 29.0437 12.8433C29.0437 11.3451 27.8917 10.6381 27.2828 10.4729Z" fill="white"/>
        <path d="M13.8527 18.9195V8.28602C13.8527 8.15173 13.7993 8.02293 13.7044 7.92797C13.6094 7.83301 13.4806 7.77966 13.3463 7.77966H7.27003C7.13574 7.77966 7.00694 7.83301 6.91198 7.92797C6.81702 8.02293 6.76367 8.15173 6.76367 8.28602V27.5276C6.76367 27.9305 6.92372 28.3169 7.2086 28.6018C7.49348 28.8867 7.87986 29.0467 8.28275 29.0467H11.6026C11.9181 29.0493 12.2301 28.9797 12.5146 28.8431C12.7991 28.7065 13.0485 28.5066 13.2438 28.2587C13.444 28.002 13.5787 27.7005 13.6361 27.3801C13.6936 27.0597 13.6721 26.7302 13.5736 26.42C13.471 26.0921 13.3438 25.7237 13.2083 25.3319C12.7077 23.8825 12.0475 22.9856 11.8716 20.9443C12.4009 20.9328 12.9047 20.7143 13.275 20.3359C13.6453 19.9574 13.8526 19.449 13.8527 18.9195Z" fill="white"/>
    </svg>
)}

export function ExperienceIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M24.9156 15.0981L23.7503 13.9581L13.9343 23.7615L15.1122 24.9394C16.1002 25.9273 17.1261 26.4213 18.1394 26.4213C19.1526 26.4213 20.1786 25.9273 21.1665 24.9394L24.9156 21.1903C26.9294 19.1638 26.9294 17.1246 24.9156 15.0981Z" fill="white"/>
        <path d="M11.8074 1.98896C9.81884 0.000425845 7.729 0.000425845 5.74047 1.98896L1.97872 5.73803C0.00285995 7.72656 0.00285995 9.81642 1.97872 11.8049L3.14398 12.9702L12.96 3.15421L11.8074 1.98896Z" fill="white"/>
        <path d="M25.8919 3.26846C24.2326 7.41018 20.4456 12.8185 16.8358 16.3522C16.3165 13.0845 13.7074 10.526 10.4143 10.07C13.9607 6.44758 19.407 2.60984 23.5614 0.937957C24.296 0.65931 25.0306 0.874628 25.4866 1.3306C25.9679 1.8119 26.1958 2.53385 25.8919 3.26846Z" fill="white"/>
        <path d="M16.8358 16.3523C16.2025 16.9729 15.5692 17.5429 14.9613 18.0242L12.4661 20.0254C12.1495 20.2534 11.8328 20.4433 11.4782 20.5953C11.4782 20.3547 11.4528 20.114 11.4275 19.8607C11.2882 18.8095 10.8069 17.8089 9.95831 16.9603C9.08437 16.099 8.04577 15.605 6.96918 15.4657C6.71586 15.4404 6.44988 15.4277 6.20923 15.4404C6.34855 15.0477 6.56387 14.6804 6.82985 14.3764L8.80572 11.8813C9.27435 11.286 9.81898 10.678 10.4143 10.07C13.7073 10.526 16.3165 13.0845 16.8358 16.3523Z" fill="white"/>
        <path d="M11.4782 20.5949C11.4782 21.9881 10.9462 23.318 9.93291 24.3186C9.1603 25.1039 8.12172 25.6359 6.85514 25.7879L3.752 26.1298C2.05479 26.3198 0.598219 24.8633 0.788206 23.1534L1.13018 20.0376C1.43416 17.2638 3.752 15.4906 6.20917 15.4399C6.44982 15.4272 6.7158 15.4399 6.96912 15.4652C8.04571 15.6046 9.08431 16.0985 9.95825 16.9598C10.8069 17.8084 11.2882 18.809 11.4275 19.8603C11.4529 20.1136 11.4782 20.3542 11.4782 20.5949Z" fill="white"/>
    </svg>
)}

export function WorkIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
        <path d="M18.1533 18.02C18.1533 18.5157 17.7567 18.9171 17.2671 18.9171H11.9497C11.4601 18.9171 11.0635 18.5157 11.0635 18.02V15.3288H0.428711V23.4025C0.428711 24.8379 1.66943 26.0938 3.0874 26.0938H26.1294C27.5474 26.0938 28.7881 24.8379 28.7881 23.4025V15.3288H18.1533V18.02ZM26.1294 6.35796H21.6982V3.66671C21.6982 2.23138 20.4575 0.975464 19.0396 0.975464H10.1772C8.75928 0.975464 7.51855 2.23138 7.51855 3.66671V6.35796H3.0874C1.66943 6.35796 0.428711 7.61387 0.428711 9.0492V13.5346H28.7881V9.0492C28.7881 7.61387 27.5474 6.35796 26.1294 6.35796ZM18.1533 6.35796H11.0635V4.56379H18.1533V6.35796Z" fill="white"/>
    </svg>
)}

export function CaseStudiesIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="23" viewBox="0 0 31 23" fill="none">
        <path d="M25.8367 20.0044C27.2479 20.0044 28.3897 18.8462 28.3897 17.4306L28.4026 3.27472C28.4026 1.85913 27.2479 0.700928 25.8367 0.700928H5.30992C3.8987 0.700928 2.74407 1.85913 2.74407 3.27472V17.4306C2.74407 18.8462 3.8987 20.0044 5.30992 20.0044H0.178223C0.178223 21.42 1.33285 22.5782 2.74407 22.5782H28.4026C29.8138 22.5782 30.9684 21.42 30.9684 20.0044H25.8367ZM6.59284 3.27472H24.5538C25.2594 3.27472 25.8367 3.85382 25.8367 4.56162V16.1437C25.8367 16.8515 25.2594 17.4306 24.5538 17.4306H6.59284C5.88723 17.4306 5.30992 16.8515 5.30992 16.1437V4.56162C5.30992 3.85382 5.88723 3.27472 6.59284 3.27472ZM15.5733 21.2913C14.8677 21.2913 14.2904 20.7122 14.2904 20.0044C14.2904 19.2966 14.8677 18.7175 15.5733 18.7175C16.2789 18.7175 16.8562 19.2966 16.8562 20.0044C16.8562 20.7122 16.2789 21.2913 15.5733 21.2913Z" fill="white"/>
    </svg>
)}

export function BusinessIcon () {
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path d="M18.5944 21.3493C18.322 21.3493 18.0557 21.4301 17.8291 21.5815C17.6026 21.7328 17.4261 21.948 17.3218 22.1997C17.2176 22.4514 17.1903 22.7283 17.2434 22.9955C17.2966 23.2627 17.4278 23.5082 17.6204 23.7008C17.8131 23.8934 18.0585 24.0246 18.3257 24.0778C18.5929 24.1309 18.8699 24.1036 19.1215 23.9994C19.3732 23.8951 19.5884 23.7186 19.7397 23.4921C19.8911 23.2655 19.9719 22.9992 19.9719 22.7268C19.9719 22.3615 19.8268 22.0111 19.5684 21.7528C19.3101 21.4945 18.9597 21.3493 18.5944 21.3493ZM10.3297 21.3493H6.19732C5.832 21.3493 5.48164 21.4945 5.22331 21.7528C4.96499 22.0111 4.81987 22.3615 4.81987 22.7268C4.81987 23.0921 4.96499 23.4425 5.22331 23.7008C5.48164 23.9591 5.832 24.1042 6.19732 24.1042H10.3297C10.695 24.1042 11.0454 23.9591 11.3037 23.7008C11.562 23.4425 11.7071 23.0921 11.7071 22.7268C11.7071 22.3615 11.562 22.0111 11.3037 21.7528C11.0454 21.4945 10.695 21.3493 10.3297 21.3493ZM22.7268 21.3493C22.4544 21.3493 22.188 21.4301 21.9615 21.5815C21.735 21.7328 21.5584 21.948 21.4542 22.1997C21.3499 22.4514 21.3226 22.7283 21.3758 22.9955C21.4289 23.2627 21.5601 23.5082 21.7528 23.7008C21.9454 23.8934 22.1909 24.0246 22.4581 24.0778C22.7253 24.1309 23.0022 24.1036 23.2539 23.9994C23.5056 23.8951 23.7207 23.7186 23.8721 23.4921C24.0235 23.2655 24.1042 22.9992 24.1042 22.7268C24.1042 22.3615 23.9591 22.0111 23.7008 21.7528C23.4425 21.4945 23.0921 21.3493 22.7268 21.3493ZM18.5944 13.0846C18.322 13.0846 18.0557 13.1654 17.8291 13.3167C17.6026 13.4681 17.4261 13.6832 17.3218 13.9349C17.2176 14.1866 17.1903 14.4636 17.2434 14.7308C17.2966 14.998 17.4278 15.2434 17.6204 15.4361C17.8131 15.6287 18.0585 15.7599 18.3257 15.813C18.5929 15.8662 18.8699 15.8389 19.1215 15.7347C19.3732 15.6304 19.5884 15.4538 19.7397 15.2273C19.8911 15.0008 19.9719 14.7345 19.9719 14.4621C19.9719 14.0967 19.8268 13.7464 19.5684 13.488C19.3101 13.2297 18.9597 13.0846 18.5944 13.0846ZM10.3297 13.0846H6.19732C5.832 13.0846 5.48164 13.2297 5.22331 13.488C4.96499 13.7464 4.81987 14.0967 4.81987 14.4621C4.81987 14.8274 4.96499 15.1777 5.22331 15.4361C5.48164 15.6944 5.832 15.8395 6.19732 15.8395H10.3297C10.695 15.8395 11.0454 15.6944 11.3037 15.4361C11.562 15.1777 11.7071 14.8274 11.7071 14.4621C11.7071 14.0967 11.562 13.7464 11.3037 13.488C11.0454 13.2297 10.695 13.0846 10.3297 13.0846ZM22.7268 4.81987C22.4544 4.81987 22.188 4.90065 21.9615 5.05201C21.735 5.20337 21.5584 5.4185 21.4542 5.67019C21.3499 5.92189 21.3226 6.19885 21.3758 6.46605C21.4289 6.73325 21.5601 6.97869 21.7528 7.17133C21.9454 7.36397 22.1909 7.49516 22.4581 7.54831C22.7253 7.60146 23.0022 7.57418 23.2539 7.46992C23.5056 7.36567 23.7207 7.18912 23.8721 6.96259C24.0235 6.73607 24.1042 6.46976 24.1042 6.19732C24.1042 5.832 23.9591 5.48164 23.7008 5.22331C23.4425 4.96499 23.0921 4.81987 22.7268 4.81987ZM22.7268 13.0846C22.4544 13.0846 22.188 13.1654 21.9615 13.3167C21.735 13.4681 21.5584 13.6832 21.4542 13.9349C21.3499 14.1866 21.3226 14.4636 21.3758 14.7308C21.4289 14.998 21.5601 15.2434 21.7528 15.4361C21.9454 15.6287 22.1909 15.7599 22.4581 15.813C22.7253 15.8662 23.0022 15.8389 23.2539 15.7347C23.5056 15.6304 23.7207 15.4538 23.8721 15.2273C24.0235 15.0008 24.1042 14.7345 24.1042 14.4621C24.1042 14.0967 23.9591 13.7464 23.7008 13.488C23.4425 13.2297 23.0921 13.0846 22.7268 13.0846ZM28.2366 4.81987C28.2366 3.72389 27.8012 2.67281 27.0263 1.89784C26.2513 1.12287 25.2002 0.6875 24.1042 0.6875H4.81987C3.72389 0.6875 2.67281 1.12287 1.89784 1.89784C1.12287 2.67281 0.6875 3.72389 0.6875 4.81987V7.57478C0.693575 8.59417 1.07623 9.57534 1.76192 10.3297C1.07623 11.084 0.693575 12.0652 0.6875 13.0846V15.8395C0.693575 16.8589 1.07623 17.8401 1.76192 18.5944C1.07623 19.3488 0.693575 20.3299 0.6875 21.3493V24.1042C0.6875 25.2002 1.12287 26.2513 1.89784 27.0263C2.67281 27.8012 3.72389 28.2366 4.81987 28.2366H24.1042C25.2002 28.2366 26.2513 27.8012 27.0263 27.0263C27.8012 26.2513 28.2366 25.2002 28.2366 24.1042V21.3493C28.2305 20.3299 27.8479 19.3488 27.1622 18.5944C27.8479 17.8401 28.2305 16.8589 28.2366 15.8395V13.0846C28.2305 12.0652 27.8479 11.084 27.1622 10.3297C27.8479 9.57534 28.2305 8.59417 28.2366 7.57478V4.81987ZM25.4817 24.1042C25.4817 24.4696 25.3366 24.8199 25.0783 25.0783C24.8199 25.3366 24.4696 25.4817 24.1042 25.4817H4.81987C4.45454 25.4817 4.10418 25.3366 3.84586 25.0783C3.58754 24.8199 3.44241 24.4696 3.44241 24.1042V21.3493C3.44241 20.984 3.58754 20.6336 3.84586 20.3753C4.10418 20.117 4.45454 19.9719 4.81987 19.9719H24.1042C24.4696 19.9719 24.8199 20.117 25.0783 20.3753C25.3366 20.6336 25.4817 20.984 25.4817 21.3493V24.1042ZM25.4817 15.8395C25.4817 16.2048 25.3366 16.5552 25.0783 16.8135C24.8199 17.0718 24.4696 17.217 24.1042 17.217H4.81987C4.45454 17.217 4.10418 17.0718 3.84586 16.8135C3.58754 16.5552 3.44241 16.2048 3.44241 15.8395V13.0846C3.44241 12.7193 3.58754 12.3689 3.84586 12.1106C4.10418 11.8523 4.45454 11.7071 4.81987 11.7071H24.1042C24.4696 11.7071 24.8199 11.8523 25.0783 12.1106C25.3366 12.3689 25.4817 12.7193 25.4817 13.0846V15.8395ZM25.4817 7.57478C25.4817 7.9401 25.3366 8.29046 25.0783 8.54879C24.8199 8.80711 24.4696 8.95223 24.1042 8.95223H4.81987C4.45454 8.95223 4.10418 8.80711 3.84586 8.54879C3.58754 8.29046 3.44241 7.9401 3.44241 7.57478V4.81987C3.44241 4.45454 3.58754 4.10418 3.84586 3.84586C4.10418 3.58754 4.45454 3.44241 4.81987 3.44241H24.1042C24.4696 3.44241 24.8199 3.58754 25.0783 3.84586C25.3366 4.10418 25.4817 4.45454 25.4817 4.81987V7.57478ZM18.5944 4.81987C18.322 4.81987 18.0557 4.90065 17.8291 5.05201C17.6026 5.20337 17.4261 5.4185 17.3218 5.67019C17.2176 5.92189 17.1903 6.19885 17.2434 6.46605C17.2966 6.73325 17.4278 6.97869 17.6204 7.17133C17.8131 7.36397 18.0585 7.49516 18.3257 7.54831C18.5929 7.60146 18.8699 7.57418 19.1215 7.46992C19.3732 7.36567 19.5884 7.18912 19.7397 6.96259C19.8911 6.73607 19.9719 6.46976 19.9719 6.19732C19.9719 5.832 19.8268 5.48164 19.5684 5.22331C19.3101 4.96499 18.9597 4.81987 18.5944 4.81987ZM10.3297 4.81987H6.19732C5.832 4.81987 5.48164 4.96499 5.22331 5.22331C4.96499 5.48164 4.81987 5.832 4.81987 6.19732C4.81987 6.56265 4.96499 6.91301 5.22331 7.17133C5.48164 7.42965 5.832 7.57478 6.19732 7.57478H10.3297C10.695 7.57478 11.0454 7.42965 11.3037 7.17133C11.562 6.91301 11.7071 6.56265 11.7071 6.19732C11.7071 5.832 11.562 5.48164 11.3037 5.22331C11.0454 4.96499 10.695 4.81987 10.3297 4.81987Z" fill="white"/>
    </svg>
)}

export function BackArrow () {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="28" viewBox="0 0 17 28" fill="none">
            <path d="M15.7669 4.29083L6.04517 14.0125L15.7669 23.7342C16.7441 24.7114 16.744 26.2899 15.7669 27.2671C14.7897 28.2443 13.2112 28.2443 12.234 27.2671L0.733314 15.7664C-0.243867 14.7893 -0.243867 13.2107 0.733314 12.2336L12.234 0.732886C13.2112 -0.244295 14.7897 -0.244295 15.7669 0.732886C16.719 1.71007 16.7441 3.31365 15.7669 4.29083Z" fill="white"/>
        </svg>
    )
}

export function MainLogo () {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="43" viewBox="0 0 48 43" fill="none">
            <path d="M21.0199 8.95342L8.22009 6.95068L0 16.4931L4.69719 27.9205L17.497 29.9233L25.7171 20.3808L21.0199 8.95342Z" fill="#F36A24"/>
            <path d="M39.1042 21.6767L27.009 19.7918L22.5466 8.95342L30.297 0L42.5097 1.76712L46.972 12.6055L39.1042 21.6767ZM27.831 18.7315L38.5171 20.3808L45.328 12.4877L41.4528 2.94521L30.7667 1.29589L23.9558 9.18904L27.831 18.7315Z" fill="white"/>
            <path d="M35.5813 43L23.3686 41.1151L18.9062 30.2767L26.6566 21.3233L38.8693 23.2082L43.3317 34.0466L35.5813 43ZM24.308 40.0548L34.9941 41.7041L41.8051 33.811L37.9299 24.2685L27.1263 22.6192L20.3154 30.5123L24.308 40.0548Z" fill="white"/>
            <path opacity="0.2" d="M34.5244 34.9891C30.6492 33.1041 26.6566 31.2192 22.7814 29.3343C21.6071 28.7452 20.4328 28.6274 20.3154 27.5671C20.0805 25.3288 19.9631 23.0904 19.7282 20.8521C19.4934 18.6137 19.3759 16.3754 19.1411 14.137C19.0236 13.0767 19.7282 13.0767 21.1374 12.2521C24.6603 10.0137 28.3006 7.77535 31.8235 5.537C30.8841 5.65481 29.9446 5.77261 29.0052 5.89042C32.8804 7.77535 36.873 9.66029 40.7482 11.5452C41.9225 12.1343 43.0968 12.2521 43.2142 13.3123C43.449 15.5507 43.5665 17.7891 43.8013 20.0274C44.0362 22.2658 44.1536 24.5041 44.3885 26.7425C44.5059 27.8028 43.8013 27.8027 42.3922 28.6274C38.8693 30.8658 35.229 33.1041 31.7061 35.3425C31.2363 35.6959 33.9372 35.5781 34.4069 35.2247C38.7519 32.5151 43.0968 29.8055 47.3242 27.0959C47.4417 27.0959 47.4417 26.9781 47.5591 26.8603C47.2068 21.9123 46.7371 16.9644 46.3848 11.8986C46.3848 11.1918 40.5133 9.07125 39.8087 8.71782C37.2253 7.53974 34.7592 6.24385 32.1758 5.06577C31.5886 4.71234 29.9446 5.06577 29.3575 5.41919C25.0126 8.12878 20.6677 10.8384 16.4402 13.548C16.3228 13.548 16.3228 13.6658 16.2053 13.7836C16.5576 18.7315 17.0273 23.6795 17.3796 28.7452C17.3796 29.4521 23.2511 31.5726 23.9557 31.926C26.5391 33.1041 29.0052 34.4 31.5886 35.5781C32.2932 36.0493 34.5244 34.9891 34.5244 34.9891Z" fill="white"/>
        </svg>
    )
}