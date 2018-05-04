require "./cookie.rb"
require "./cookie_bag.rb"

c1 = Cookie.new(6, 7)
o1 = Oreo.new(3, 4)
c2 = Cookie.new(6, 10)
o2 = Oreo.new(4, 4)
cb = CookieBag.new(3)

cb.add(c1)
cb.add(o1).add(c2).add(o2)

cb.details

cb.take
cb.take
cb.take
cb.take