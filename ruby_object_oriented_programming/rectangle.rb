class Rectangle
  attr_accessor :width, :height

  def initialize(width = 1, height = 1)
    @width = width
    @height = height
  end

  def area
    # @width * @height
    # 👆 gets values from @width & @height variables
    width * height
    # 👆 calls reader methods for width & height
  end

  def is_square?
    width == height
  end
end

=begin

[121] pry(main)>
[122] pry(main)> load "./rectangle.rb"
=> true
[123] pry(main)> Rectangle.new
=> #<Rectangle:0x00007fa34f18d950 @height=1, @width=1>
[124] pry(main)> r = Rectangle.new
=> #<Rectangle:0x00007fa34f164780 @height=1, @width=1>
[125] pry(main)> r.height = 5-
[125] pry(main)*
[125] pry(main)> r.height = 50
=> 50
[126] pry(main)> r
=> #<Rectangle:0x00007fa34f164780 @height=50, @width=1>
[127] pry(main)> r.width = 10
=> 10
[128] pry(main)> r.area
=> 500
[129] pry(main)> r.is_square?

=end