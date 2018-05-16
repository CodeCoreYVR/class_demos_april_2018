require 'minitest/autorun'
require './rectangle.rb'

class TestRectangle < MiniTest::Test

  def test_rectangle_area
    r = Rectangle.new 4, 5
    result = r.area
    assert_equal 20, result
  end

  def test_rectangle_perimeter
    r = Rectangle.new 6, 10
    result = r.perimeter
    assert_equal 32, result
  end

  def test_is_square?
    r = Rectangle.new 4, 4
    assert_equal true, r.is_square?
  end

end