import unittest
from selenium import webdriver
import requests
import page

class SeleniumCBT(unittest.TestCase):
    def setUp(self):
        self.username = "user"
        self.authkey = "pass"

        self.api_session = requests.Session()
        self.api_session.auth = (self.username, self.authkey)
        self.test_result = None

        caps = {}
        caps['browserName'] = 'Chrome'
        caps['version'] = '60x64'
        caps['platform'] = 'Windows 10'
        caps['screenResolution'] = '1366x768'
        caps['record_video'] = 'true'

        self.driver = webdriver.Remote(
            desired_capabilities=caps,
            command_executor="http://%s:%s@hub.crossbrowsertesting.com:80/wd/hub" % (self.username, self.authkey)
        )

        self.driver.implicitly_wait(20)

        self.driver.get('https://int.eyerim-stage-alpha.hatimeria.cloud/')

    def test_Register(self):
        #open Category Page
        main_page = page.MainPage(self.driver)
        assert main_page.is_title_matches(), "eyerim title doesn't match."
        main_page.chooseCategory()

        #open Product Page
        category_page = page.CategoryPage(self.driver)
        category_page.chooseProduct()

        self.test_result = 'pass'
        self.driver.quit()


if __name__ == '__main__':
    unittest.main()