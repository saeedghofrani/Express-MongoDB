-- ------------------------------ mysql Q1
select 			`question text` 
from 			`user exam`.questions as pq 
inner join 		`user exam`.users as pu
on 				pq.Users_idUsers = pu.idUsers
where 			pu.name = 'saeed';

select 			* 
from 			`user exam`.questions 
as 				pq 
inner join 		`user exam`.users 
as 				pu
on 				pq.Users_idUsers = pu.idUsers
where 			pu.name = 'saeed';


-- -------------------------- mysql Q2
select 			* 
from 			`user exam`.exam 
as 				pe
inner join 		`user exam`.users 
as 				pu
on 				pe.Users_idUsers = pu.idUsers
where 			pu.name = 'saeed';

select 			idExam, score  
from 			`user exam`.exam 
as 				pe
inner join 		`user exam`.users 
as 				pu
on 				pe.Users_idUsers = pu.idUsers
where 			pu.name = 'saeed';


-- --------------------------- mysql Q3
select 			*
from 			`user exam`.questions 
as 				pq
inner join 		`user exam`.users 
as 				pu
on 				pq.Users_idUsers = pu.idUsers
where 			(pu.name = 'saeed') 
and 			(pq.qtype = 'oral');

select 			title, description, qtype 
from 			`user exam`.questions 
as 				pq
inner join 		`user exam`.users 
as 				pu
on 				pq.Users_idUsers = pu.idUsers
where 			(pu.name = 'saeed') 
and 			(pq.qtype = 'oral');


-- --------------------------------- mysql Q4
set 		@v3 = (
select 		idUsers 
from 		`user exam`.users 
as 			pu 
where 		pu.name = "mohhamad");
select 			idExam, score , idQuestions, title, qtype 
from 			`user exam`.exam 
as 				pe
join 			`user exam`.questions 
as				pq
on 				pe.Questions_idQuestions = pq.idQuestions
where 			((pe.Users_idUsers = @v3) 
and 			(pq.qtype = 'written')) 
and 			pe.score >= 1;

select 			idExam, score , idQuestions, title, qtype 
from 			`user exam`.Users 
as 				pu
inner join 		`user exam`.exam 
as 				pe
on 				pu.idUsers = pe.Users_idUsers
inner join 		`user exam`.questions
as 				pq 
on 				pe.Questions_idQuestions = pq.idQuestions
where 			pu.name = "mohhamad"
and 			pq.qtype = 'written'
and 			pe.score >= 1;