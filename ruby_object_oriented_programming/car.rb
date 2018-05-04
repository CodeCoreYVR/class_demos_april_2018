# Demo: Car Does Things

class Car
  # Demo: Accessing Attributes
  attr_accessor :model, :type, :capacity

  # Demo: Attributes
  def initialize(model, type, capacity)
    @model = model
    @type = type
    @capacity = capacity
  end

  # Demo: Shared Method
  def self.max_speed
    200
  end

  def drive
    ignite_engine
    puts "Vroooooom!"
  end

  def stop
    puts "Screeech!"
  end

  def park
    puts "I'm parked!"
  end

  # Demo: Card Does Private Things
  private
  def pump_gas
    puts "Pumping gas..."
  end

  def ignite_engine
    puts "🔥 Igniting Engine..."
  end
end

# my_volvo = Car.new
# my_volvo.drive
# my_volvo.stop
# my_volvo.park

ae86 = Car.new("Toyota AE86", "Sport Compact", 4)

puts ae86.model
puts ae86.type