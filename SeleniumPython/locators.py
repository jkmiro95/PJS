from selenium.webdriver.common.by import By
import random

class MainPageLocators(object):
    random_int = str(random.randint(1,4))
    CATEGORY_BUTTON = (By.CSS_SELECTOR, '.panel > .menu > li:nth-of-type(' + random_int + ') > a')

class CategoryPageLocators(object):
    random_product = str(random.randint(1,45))
    PRODUCT_LINK = (By.CSS_SELECTOR, '.products-list > li:nth-of-type(' + random_product + ') > a > .image > img')