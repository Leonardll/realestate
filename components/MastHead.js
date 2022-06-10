import React from 'react'
import { useRouter } from 'next/router'

import es from '../locales/es';
import en from '../locales/en';
function MastHead() {
    let router = useRouter();
    let title = router.locale === 'es' ? es.mastheadTitle : en.mastheadTitle;
    return (
        <div className="masthead">
            <div className='container-fluid '>
            <div className='masthead-header text-start'>
                <h2 className='fst-italic mt-2 px-2 lh-1 mb-4 lh-sm text-white text-break'>{title}</h2>
                <p className='mb-5 px-2 text-wrap'>
                {router.locale === 'es' ? es.mastheadText : en.mastheadText}
                </p>
            </div>
            </div>
        </div>
    )
}

export default MastHead
