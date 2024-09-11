import { test, expect } from "@playwright/test"
import LoginPage from "../pages/login.page";
import { DetailProduct } from "../pages/DetailProduct.page"
import { PanierPage } from '../pages/panier.page';




    test("test E2E", async ({ page }) => {
        const loginPage = new LoginPage(page)
        const detailProduct = new DetailProduct(page)
        const panierPage = new PanierPage(page);

        
        await loginPage.goto("https://www.saucedemo.com/")


        // await loginPage.saisirUsername("standard_user")
        // await loginPage.saisirPassword("secret_sauce")
        // await loginPage.clickSubmitButton()

        //la fonction dologin connecte le user et remplace les 2etapes de saisiirUsername et password
        await loginPage.doLogin("standard_user", "secret_sauce")

        await detailProduct.clickdetailproductButonButton();
        // await expect(page.locator('button[data-test="back-to-products"]')).toBeVisible();
        await panierPage.addProductToCart();
    
        await panierPage.openCart();
    
        const isProductInCart = await panierPage.isProductInCart('Sauce Labs Backpack');
    
        expect(isProductInCart).toBeTruthy();
    })

    
    


