import React from 'react';
const paths:Record<string,React.ReactNode>={
 menu_book:<><path d="M12 5v15M12 5C8 2 4 3 2 4v15c3-1 6-1 10 1 4-2 7-2 10-1V4c-2-1-6-2-10 1Z"/></>,
 payments:<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></>,
 download:<><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></>,
 close:<path d="m6 6 12 12M18 6 6 18"/>,
 contrast:<><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor"/></>,
 expand_more:<path d="m5 9 7 7 7-7"/>,
 warning_amber:<><path d="m12 3 10 18H2Z M12 9v5"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></>,
};
export function Icon({name,...props}:{name:string}&React.SVGProps<SVGSVGElement>){return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{paths[name]||paths.warning_amber}</svg>}
