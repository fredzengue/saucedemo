import test, { expect } from "@playwright/test";
import { AllItemsPages } from '../pages/all-items.pages';
import LoginPage from "../pages/login.page";
import {checkoutPage} from "../pages/checkout.page"

test("All products items",{tag: "@regression"}, async ({ page }) => {
    const loginPage = new LoginPage(page)
    const deatailPage = new AllItemsPages(page)
    const checkoutpage = new checkoutPage(page)
        await loginPage.goto("https://www.saucedemo.com/")
        await loginPage.saisirUsername("standard_user")
        await loginPage.saisirPassword("secret_sauce")
        await loginPage.clickSubmitButton()
        await deatailPage.clickAddcard()
        await checkoutpage.clickPanierButon()
        await checkoutpage.clickcheckoutlButon()
        await checkoutpage.saisirFirstname("wissem")
        await checkoutpage.saisirLastname("wiwi")
        await checkoutpage.saisirZipCode("94230")
        await checkoutpage.clickContinueButon()
        await checkoutpage.clickcfinishlButon()
        await expect(page.locator('h2[class="complete-header"]')).toContainText("Thank you for your order")   
})


test("passer une commande avec panier vide",{tag: "@regression"}, async ({ page }) => {
    const loginPage = new LoginPage(page)
    const deatailPage = new AllItemsPages(page)
    const checkoutpage = new checkoutPage(page)
        await loginPage.goto("https://www.saucedemo.com/")
        await loginPage.saisirUsername("standard_user")
        await loginPage.saisirPassword("secret_sauce")
        await loginPage.clickSubmitButton()
        await deatailPage.clickAddcard()
        await checkoutpage.clickPanierButon()
        await checkoutpage.clickcRemoveArticle()
        await checkoutpage.clickcheckoutlButon()
        await checkoutpage.saisirFirstname("wissem")
        await checkoutpage.saisirLastname("wiwi")
        await checkoutpage.saisirZipCode("94230")
        await checkoutpage.clickContinueButon()
        await checkoutpage.clickcfinishlButon()
        await expect(page.locator('h2[class="complete-header"]')).toContainText("Thank you for your order")   
})