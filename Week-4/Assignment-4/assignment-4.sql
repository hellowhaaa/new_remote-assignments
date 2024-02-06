select article.*, user.email 
from article
join user
on article.author = user.id;

select * from article
order by id
limit 6, 6;