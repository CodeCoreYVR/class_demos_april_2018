class Rectangle

  attr_reader :width, :height

  def initialize(width, height)
    @width, @height = width, height
  end

  def area
    width * height
  end

  def perimeter
    (width + height) * 2
  end

  def is_square?
    width == height
  end

end