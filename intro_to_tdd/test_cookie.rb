require 'minitest/autorun'
require './cookie.rb'

class TestCookie < MiniTest::Test

  # def test_something_something
  #   assert_equal(3, 1 + 1)
  # end

  def test_cookie_has_sugar_method
    # GIVEN:  a cookie with 5g of sugar and 10g of Butter
    c = Cookie.new(5, 10)

    # WHEN: I call `sugar` method on my cookie object
    result = c.sugar

    # THEN: I get 5 as a result
    assert_equal(result, 5)
  end

  def test_cookie_has_sugar_set_method
    # GIVEN: a cookie with 6g of sugar and 15g of butter
    c = Cookie.new 6, 15

    # WHEN: set the sugar to 10
    c.sugar = 10


    # THEN: the value of sugar is now 10
    assert_equal(10, c.sugar)
  end

  def test_calorie_count
    # GIVEN: a cookie with 5g of sugar and 8g of butter
    c = Cookie.new 5, 8

    # WHEN: we call the `calorie_count` method
    result = c.calorie_count

    # THEN: the result is equal to
    assert_equal(92, result)
  end


end