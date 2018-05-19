from locators import MainPageLocators
from locators import CategoryPageLocators
from locators import ProductPageLocators
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

