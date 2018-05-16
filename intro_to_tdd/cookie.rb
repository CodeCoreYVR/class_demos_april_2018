class Cookie

  attr_accessor :sugar, :butter

  SUGAR_CALORIES = 4
  BUTTER_CALORIES = 9

  def initialize(sugar, butter)
    @sugar = sugar
    @butter = butter
  end

  def calorie_count
    sugar * SUGAR_CALORIES + butter * BUTTER_CALORIES
  end

end