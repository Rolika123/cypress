Feature: Bulk upload Admin

    Scenario Outline: Admin bulk upload to portal
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on bulk upload
        And User clicks on upload button
        And User clicks on click or drag file option
        And User clicks on final submit
        Examples:
            | username | password |
            | thao+test-qa-interview@perxtech.com    | admin1234 |
        
