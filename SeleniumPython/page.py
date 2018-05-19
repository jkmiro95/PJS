from locators import MainPageLocators
from locators import CategoryPageLocators

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