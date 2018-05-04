# Ruby: Object Oriented Programing

# We define classes in ruby with the `class` keyword.
# By convention, we use CapitalizedCamelCase for class names.
# However, the file name is usually as a snake_case version of
# the class in contains.
# It's a best practice to keep one class per file.

# While in `pry` or `irb`, we can load a file with `load './cookie.rb'
# or `require './cookie.rb'`.
# Load will force re-load a file even if its been loaded before.
# However, require will not reload a file if it was already loaded.
# In other words, require caches the files it loads.

class Cookie ## Begin Cookie class block
  # Class variables can be read and mutated by every instance
  # of the class including class methods.
  @@color = "brown"
  
  # The `initialize` is a special that method that is called
  # everytime an instance is created with the class method `new`.
  # Example: Cookie.new <-- initialize is called
  def initialize(sugar, butter)
    # Variables with @ in front of their name are called
    # instance variables. They only exist inside of the instance
    # and can be used by all instance methods.
    @sugar = sugar
    @butter = butter
    puts "Cooking is being created..."
    
  end

  # The instance method `sugar` is an attribute reader, because
  # it allows to read the instance variable @sugar from instance
  # of cookie.
  def sugar
    @sugar
  end

  # The instance method `sugar=` is an attribute writer, because
  # it allows us to assign a value to the instance variable `@sugar`
  # of a cookie.
  def sugar=(amount)
    @sugar = amount
  end
  
  # The following create an attribute reader method and an attribute
  # writer method for the @butter instance variable like we did
  # manually above for @sugar.
  # attr_reader(:butter)
  # attr_writer(:butter)

  attr_accessor(:butter)
  # This essentially creates a reader and a writer for
  # @butter
  
  def details
    "sugar: #{@sugar} / butter: #{@butter}"
  end

  # The method below is defined as a `class` method which
  # means that it can be call by the class itself.
  # Example: Cookie.info <-- Calls the info method

  # It won't work with instances of the class.
  def self.info
    # Any method whether instance or class can use a class variable
    "I create cookies with a #{@@color} oven"
  end
  # Using `self` in the scope of a class block (and not inside
  # the block of a method) returns the class itself. Cookie
  # in this case.

  def Cookie.more_info
    "I create a bunch of cookies"
  end

  def bake_and_eat(minutes)
    puts bake(minutes)
    puts eat
  end

  # The `eat` method below is considered a `public` `instance`
  # method which means that you can call method with an instance of
  # the Cookie class outside of Cookie's class' block.
  def eat
    "Nom. Nom. Nom."
  end

  ## This will make all methods below `private`.
  private
  # private methods can only be called from other public
  # or private methods inside of the Cookie class.

  def bake(minutes)
    "Baking the cookie in #{minutes} mins."
  end
end ## End Cookie class block

# The class Oreo inherits from the Cookie class by using
# the `<` symbol in the class definition.

# Orea will get Cookie's initialize, all its methods and accessors.
class Oreo < Cookie
  attr_accessor :filling_type

  def eat
    puts "Lick filling..."
    super
    # use `super` keyword to call a method of the same name in the
    # parent (or super) class.
  end
end