from locators import MainPageLocators
from locators import CategoryPageLocators
from locators import ProductPageLocators
from locators import CartLocators
from locators import AddressStepLocators
from locators import PaymentStepLocators
from locators import SummaryStepLocators
from selenium.webdriver.common.action_chains import ActionChains
from random import randint

class BasePage(object):

    def __init__(self, driver):
        self.driver = driver

    def is_title_matches(self):
        return "eyerim" in self.driver.title


class MainPage(BasePage):

    def chooseCategory(self):
        categoryButton = self.driver.find_element(*MainPageLocators.CATEGORY_BUTTON)
        categoryButton.click()

class CategoryPage(BasePage):

    def chooseProduct(self):
        productLink = self.driver.find_element(*CategoryPageLocators.PRODUCT_LINK)
        productLink.click()

class ProductPage(BasePage):

    def addProductTocart(self):
        prescription_label = self.driver.find_elements(*ProductPageLocators.PRESCRIPTION_LABEL)
        if len(prescription_label) > 0:
            frame_only = self.driver.find_element(*ProductPageLocators.FRAME_ONLY)
            frame_only.click()
        add_button = self.driver.find_element(*ProductPageLocators.ADD_BUTTON)
        add_button.click()

class Cart(BasePage):

    def goToCheckout(self):
        checkout_button = self.driver.find_element(*CartLocators.CHECKOUT_BUTTON)
        checkout_button.click()

class AddressStep(BasePage):

    def fillForm(self):
        first_name = self.driver.find_element(*AddressStepLocators.FIRST_NAME)
        last_name = self.driver.find_element(*AddressStepLocators.LAST_NAME)
        email = self.driver.find_element(*AddressStepLocators.EMAIL)
        telephone = self.driver.find_element(*AddressStepLocators.TELEPHONE)
        street = self.driver.find_element(*AddressStepLocators.STREET)
        city = self.driver.find_element(*AddressStepLocators.CITY)
        post_code = self.driver.find_element(*AddressStepLocators.POST_CODE)
        terms_conditions = self.driver.find_element(*AddressStepLocators.TERMS_CONDITIONS)
        payment_button = self.driver.find_element(*AddressStepLocators.PAYMENT_BUTTON)
        random_number = str(randint(1, 99999))
        action = ActionChains(self.driver)

        first_name.send_keys("Test")
        last_name.send_keys("Test")
        email.send_keys("jakub.mirocha+testing" + random_number + "@hatimeria.pl")
        telephone.send_keys("111222333")
        street.send_keys("Test")
        city.send_keys("Test")
        post_code.send_keys("11222")
        action.move_to_element_with_offset(terms_conditions, 23, 16)
        action.click()
        action.perform()
        payment_button.click()

class PaymentStep(BasePage):

    def goToSummary(self):
        bank_transfer = self.driver.find_element(*PaymentStepLocators.BANK_TRANSFER)
        summary_button = self.driver.find_element(*PaymentStepLocators.SUMMARY_BUTTON)

        bank_transfer.click()
        summary_button.click()

class SummaryStep(BasePage):

    def finalizeOrder(self):
        pay_button = self.driver.find_element(*SummaryStepLocators.PAY_BUTTON)
        pay_button.click()