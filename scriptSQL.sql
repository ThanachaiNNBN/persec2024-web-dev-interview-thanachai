-- ข้อที่ 5
select
sum(order_details.quantity) total_quantity , products.product_name 
from orders 
inner join order_details  on orders.order_id = order_details.order_id
inner join products  on products.product_id = order_details.product_id 
where year(orders.order_date) = 2016 
group by  products.product_name 
order by sum(order_details.quantity) desc LIMIT 5;

-- total_quantity           product_name
-- 444	                    Gorgonzola Telino
-- 370	                    Camembert Pierrot
-- 274	                    Steeleye Stout
-- 266	                    Chartreuse verte
-- 261	                    Flotemysost



-- ข้อที่ 6
select year2016.product_name from (select
sum(order_details.quantity) total_quantity , products.product_name 
from orders 
inner join order_details  on orders.order_id = order_details.order_id
inner join products  on products.product_id = order_details.product_id 
where year(orders.order_date) = 2016 
group by  products.product_name 
order by sum(order_details.quantity) desc LIMIT 5
) as year2016
inner join 
(select
sum(order_details.quantity) total_quantity , products.product_name 
from orders 
inner join order_details  on orders.order_id = order_details.order_id
inner join products  on products.product_id = order_details.product_id 
where year(orders.order_date) = 2017
group by  products.product_name 
order by sum(order_details.quantity) desc LIMIT 5
) as year2017
on year2016.product_name  = year2017.product_name;

-- product_name
-- Gorgonzola Telino
-- Camembert Pierrot




-- ข้อที่ 7
select
year(orders.order_date) year , 	 FORMAT(sum ((order_details.quantity * products.unit_price)- order_details.discount), 'N', 'en-us')  total_sale 
from orders 
inner join order_details  on orders.order_id = order_details.order_id
inner join products  on products.product_id = order_details.product_id 
where orders.ship_region = 'Western Europe' 
group by  year(orders.order_date) 
order by year(orders.order_date);

-- year     total_sale
-- 2016	    119471.68
-- 2017	    278460.08
-- 2018	    176144.54