from selenium.webdriver.common.by import By
import random

class MainPageLocators(object):
    random_int = str(random.randint(1,4))
    CATEGORY_BUTTON = (By.CSS_SELECTOR, '.panel > .menu > li:nth-of-type(' + random_int + ') > a')

class CategoryPageLocators(object):
    random_product = str(random.randint(1,45))
    PRODUCT_LINK = (By.CSS_SELECTOR, '.products-list > li:nth-of-type(' + random_product + ') > a > .image')

class ProductPageLocators(object):
    PRESCRIPTION_LABEL = (By.ID, 'eyeris-prescription')
    FRAME_ONLY = (By.CSS_SELECTOR, '#options-1000001-list > li:nth-of-type(1) > span')
    ADD_BUTTON = (By.ID, 'product-addtocart-button')

class CartLocators(object):
    CHECKOUT_BUTTON = (By.CSS_SELECTOR, '.checkout-types > li > div> button')

class AddressStepLocators(object):
    FIRST_NAME = (By.ID, 'billing:firstname')
    LAST_NAME = (By.ID, 'billing:lastname')
    EMAIL = (By.ID, 'billing:email')
    TELEPHONE = (By.ID, 'billing:telephone')
    STREET = (By.ID, 'billing:street1')
    CITY = (By.ID, 'billing:city')
    POST_CODE = (By.ID, 'billing:postcode')
    TERMS_CONDITIONS = (By.CSS_SELECTOR, '.terms')
    PAYMENT_BUTTON = (By.CSS_SELECTOR, '#address-buttons-container > button')

class PaymentStepLocators(object):
    BANK_TRANSFER = (By.CSS_SELECTOR, '#checkout-payment-method-load > dt:nth-of-type(1) > label')
    SUMMARY_BUTTON = (By.CSS_SELECTOR, '#payment-buttons-container > button')

class SummaryStepLocators(object):
    PAY_BUTTON = (By.CSS_SELECTOR, '#review-buttons-container > div > button')