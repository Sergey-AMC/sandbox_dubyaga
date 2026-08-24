import { URLS } from './urls';

export const TOC_NAVIGATION = [
    {
        name: 'Elements',
        section: 'ELEMENTS',
        links: [
            ['TEXT_BOX', URLS.TEXT_BOX],
            ['CHECK_BOX', URLS.CHECK_BOX],
            ['RADIO_BUTTON', URLS.RADIO_BUTTON],
            ['WEB_TABLES', URLS.WEB_TABLES],
            ['BUTTONS', URLS.BUTTONS],
            ['LINKS', URLS.LINKS],
            ['BROKEN_LINKS_IMAGES', URLS.BROKEN_LINKS],
            ['UPLOAD_AND_DOWNLOAD', URLS.UPLOAD_DOWNLOAD],
            ['DYNAMIC_PROPERTIES', URLS.DYNAMIC_PROPERTIES],
        ],
    },
    {
        name: 'Forms',
        section: 'FORMS',
        links: [['PRACTICE_FORM', URLS.PRACTICE_FORM]],
    },
    {
        name: 'Alerts, Frame & Windows',
        section: 'ALERTS_FRAME_WINDOWS',
        links: [
            ['BROWSER_WINDOWS', URLS.BROWSER_WINDOWS],
            ['ALERTS', URLS.ALERTS],
            ['FRAMES', URLS.FRAMES],
            ['NESTED_FRAMES', URLS.NESTED_FRAMES],
            ['MODAL_DIALOGS', URLS.MODAL_DIALOGS],
        ],
    },
    {
        name: 'Widgets',
        section: 'WIDGETS',
        links: [
            ['ACCORDIAN', URLS.ACCORDIAN],
            ['AUTO_COMPLETE', URLS.AUTO_COMPLETE],
            ['DATE_PICKER', URLS.DATE_PICKER],
            ['SLIDER', URLS.SLIDER],
            ['PROGRESS_BAR', URLS.PROGRESS_BAR],
            ['TABS', URLS.TABS],
            ['TOOL_TIPS', URLS.TOOL_TIPS],
            ['MENU', URLS.MENU],
            ['SELECT_MENU', URLS.SELECT_MENU],
        ],
    },
    {
        name: 'Interactions',
        section: 'INTERACTIONS',
        links: [
            ['SORTABLE', URLS.SORTABLE],
            ['SELECTABLE', URLS.SELECTABLE],
            ['RESIZABLE', URLS.RESIZABLE],
            ['DROPPABLE', URLS.DROPPABLE],
            ['DRAGABBLE', URLS.DRAGABBLE],
        ],
    },
    {
        name: 'Book Store Application',
        section: 'BOOK_STORE_APPLICATION',
        links: [
            ['LOGIN', URLS.LOGIN],
            ['BOOK_STORE', URLS.BOOK_STORE],
            ['PROFILE', URLS.PROFILE],
            ['BOOK_STORE_API', URLS.BOOK_STORE_API],
        ],
    },
] as const;
