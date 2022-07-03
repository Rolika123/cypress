Feature: Login

    Scenario Outline: Reward manage login to Portal

        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Examples:
            | username | password |
            | thao+reward-test-qa-interview@perxtech.com    | reward_admin |

    Scenario Outline: User add reward and total module access
        And User only access for reward module
        And User clicks on create reward menu
        And User enters rewardname as '<rewardname>'
        And User select validity end date and time
        And User click on final submit
        And User go back to reward dashboard
        And User search added rewardname as '<rewardname>'
        Examples:
            | rewardname |
            | Reward Rolika Reward Test |
