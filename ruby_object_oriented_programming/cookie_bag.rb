class CookieBag
  attr_accessor :capacity

  def initialize(capacity)
    @capacity = capacity
    @cookies = []
  end

  def add(cookie)
    return puts("Must be a cookie") unless cookie.is_a?(Cookie)

    if @cookies.length >= @capacity
      puts "No Room Left"
    else
      @cookies.push(cookie)
    end
    self
  end

  def take
    if @cookies.length <= 0
      puts "No cookies left"
    else
      @cookies.pop
    end
  end

  def details
    puts "This bag has #{@cookies.length} cookie(s)."
    puts "Here they are:"

    puts @cookies.map{ |cookie| cookie.details }.join(", ")
  end
end