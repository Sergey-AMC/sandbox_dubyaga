import { test, expect } from '@playwright/test';
import { URLS } from '@test-data/urls'; 
import { TOC } from '@pages/toc';

test.describe('TOC navigation', () => {
    let toc: TOC;

    test.beforeEach(async ({ page }) => {
        await page.goto(URLS.ELEMENTS);
        toc = new TOC(page);
        await toc.collapseSection(toc.Section.ELEMENTS);
    });
    test('<Elements> section', async ({page}) => {
        await toc.expandSection(toc.Section.ELEMENTS);
        await toc.openCategory(toc.Category.TEXT_BOX);
        await expect (page).toHaveURL(URLS.TEXT_BOX);
        await toc.openCategory(toc.Category.CHECK_BOX);
        await expect (page).toHaveURL(URLS.CHECK_BOX);
        await toc.openCategory(toc.Category.RADIO_BUTTON);
        await expect (page).toHaveURL(URLS.RADIO_BUTTON);
        await toc.openCategory(toc.Category.WEB_TABLES);
        await expect (page).toHaveURL(URLS.WEB_TABLES);
        await toc.openCategory(toc.Category.BUTTONS);
        await expect (page).toHaveURL(URLS.BUTTONS);
        await toc.openCategory(toc.Category.LINKS);
        await expect (page).toHaveURL(URLS.LINKS);
        await toc.openCategory(toc.Category.BROKEN_LINKS_IMAGES);
        await expect (page).toHaveURL(URLS.BROKEN_LINKS);
        await toc.openCategory(toc.Category.UPLOAD_AND_DOWNLOAD);
        await expect (page).toHaveURL(URLS.UPLOAD_DOWNLOAD);
        await toc.openCategory(toc.Category.DYNAMIC_PROPERTIES);
        await expect (page).toHaveURL(URLS.DYNAMIC_PROPERTIES);
    })
    test('<Forms> section', async ({page}) => {
        await toc.expandSection(toc.Section.FORMS);
        await toc.openCategory(toc.Category.PRACTICE_FORM);
        await expect (page).toHaveURL(URLS.PRACTICE_FORM);
    })
    test('<Alerts, Frame & Windows> section', async ({page}) => {
        await toc.expandSection(toc.Section.ALERTS_FRAME_WINDOWS);
        await toc.openCategory(toc.Category.BROWSER_WINDOWS);
        await expect (page).toHaveURL(URLS.BROWSER_WINDOWS);
        await toc.openCategory(toc.Category.ALERTS);
        await expect (page).toHaveURL(URLS.ALERTS);
        await toc.openCategory(toc.Category.FRAMES);
        await expect (page).toHaveURL(URLS.FRAMES);
        await toc.openCategory(toc.Category.NESTED_FRAMES);
        await expect (page).toHaveURL(URLS.NESTED_FRAMES);
        await toc.openCategory(toc.Category.MODAL_DIALOGS);
        await expect (page).toHaveURL(URLS.MODAL_DIALOGS);
    })
    test('<Widgets> section', async ({page}) => {
        await toc.expandSection(toc.Section.WIDGETS);
        await toc.openCategory(toc.Category.ACCORDIAN);
        await expect (page).toHaveURL(URLS.ACCORDIAN);
        await toc.openCategory(toc.Category.AUTO_COMPLETE);
        await expect (page).toHaveURL(URLS.AUTO_COMPLETE);
        await toc.openCategory(toc.Category.DATE_PICKER);
        await expect (page).toHaveURL(URLS.DATE_PICKER);
        await toc.openCategory(toc.Category.SLIDER);
        await expect (page).toHaveURL(URLS.SLIDER);
        await toc.openCategory(toc.Category.PROGRESS_BAR);
        await expect (page).toHaveURL(URLS.PROGRESS_BAR);
        await toc.openCategory(toc.Category.TABS);
        await expect (page).toHaveURL(URLS.TABS);
        await toc.openCategory(toc.Category.TOOL_TIPS);
        await expect (page).toHaveURL(URLS.TOOL_TIPS);
        await toc.openCategory(toc.Category.MENU);
        await expect (page).toHaveURL(URLS.MENU);
        await toc.openCategory(toc.Category.SELECT_MENU);
        await expect (page).toHaveURL(URLS.SELECT_MENU);
    })
    test('<Interactions> section', async ({page}) => {
        await toc.expandSection(toc.Section.INTERACTIONS);
        await toc.openCategory(toc.Category.SORTABLE);
        await expect (page).toHaveURL(URLS.SORTABLE);
        await toc.openCategory(toc.Category.SELECTABLE);
        await expect (page).toHaveURL(URLS.SELECTABLE);
        await toc.openCategory(toc.Category.RESIZABLE);
        await expect (page).toHaveURL(URLS.RESIZABLE);
        await toc.openCategory(toc.Category.DROPPABLE);
        await expect (page).toHaveURL(URLS.DROPPABLE);
        await toc.openCategory(toc.Category.DRAGABBLE);
        await expect (page).toHaveURL(URLS.DRAGABBLE);
    })
    test('<Book Store Application> section', async ({page}) => {
        await toc.expandSection(toc.Section.BOOK_STORE_APPLICATION);
        await toc.openCategory(toc.Category.LOGIN);
        await expect (page).toHaveURL(URLS.LOGIN);
        await toc.openCategory(toc.Category.BOOK_STORE);
        await expect (page).toHaveURL(URLS.BOOK_STORE);
        await toc.openCategory(toc.Category.PROFILE);
        await expect (page).toHaveURL(URLS.PROFILE);
        await toc.openCategory(toc.Category.BOOK_STORE_API);
        await expect (page).toHaveURL(URLS.BOOK_STORE_API);
    })
})