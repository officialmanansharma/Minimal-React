import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { onValue, ref, remove, update } from 'firebase/database';
import { database } from '../Firebase';
import toast, { Toaster } from 'react-hot-toast';

export const DynamicForm = () => {

  const theme = useTheme();

  const [inputFields, setInputFields] = useState([{ 
      name: '', 
      class: '', 
      maths: '',
      hindi: '',
      totalMarks: '',
      percentage: '',
      grade: '',
    }]);
    const [disabled, setDisabled] = useState(true);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
      const inputData = ref(database, 'formData/');
      onValue(inputData, (snapshot) => {
        const data = snapshot.val();
        if(data){
          setInputFields(data);
          setTimeout(() => {
            setShowLoading(false);
          }, 2000)
        }
      });
    }, []);

    useEffect(() => {
      const gradeTable = {
        '95 - 100': 'Ex',
        '85 - 94': 'A+',
        '75 - 84': 'A',
        '65 - 74': 'B+',
        '55 - 60': 'B',
        '45 - 54': 'C',
        '35 - 44': `D (Pass)`,
        '0 - 34':  `F (Fail)`
      }
      setInputFields(prevFields => prevFields.map(field => {
        const totalMarks = field.maths !== '' && field.hindi !== '' && field.maths <= 100 && field.hindi <= 100 ? parseInt(field.maths) + parseInt(field.hindi) : '';
        const percentage = totalMarks ? ((parseInt(totalMarks) / 200) * 100).toFixed(2) : '';
        let grade = '';
        if (percentage) {
          const entry = Object.entries(gradeTable).find(([range]) => {
            const [min, max] = range.split(' - ').map(Number);
            return percentage >= min && percentage <= max;
          });
          if (entry) {
            grade = entry[1];
          }
        }
        return {
          ...field,
          totalMarks,
          percentage,
          grade
        };
      }));
    }, [inputFields]);      

    const handleFieldChange = (index, event) => {
      setDisabled(false);
      const fields = [...inputFields];
      fields[index][event.target.name] = event.target.value;
      setInputFields(fields);
    }

    const addFields = () => {
      setInputFields([...inputFields, { 
        name: '', 
        class: '', 
        maths: '',
        hindi: '',
        totalMarks: '',
        percentage: '',
        grade: '',
      }]);
      toast.success('New Field Added');
    }

    const removeFields = (index) => {
      const values = [...inputFields];
      values.splice(index, 1);
      
      if (values.length < 1) {
        setInputFields([{ 
          name: '', 
          class: '', 
          maths: '',
          hindi: '',
          totalMarks: '',
          percentage: '',
          grade: '',
        }]);
        
        remove(ref(database, 'formData'))
      } else {
        setInputFields(values);
        remove(ref(database, 'formData/' + index))
      }
      toast.success('Field Removed');
    };

    const submitData = async () => {
      const formDataToSubmit = { ...inputFields };
      const updates = {};
      updates['/formData/'] = formDataToSubmit;
      try {
        await update(ref(database), updates);
        setDisabled(true);
        toast.success('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting data:', error);
        throw error;
      }     
    }
  return (
    <Box
        sx={{
            padding: '20px'
        }}
    >
      <Typography 
        variant='h3'
        fontWeight='600'
        sx={{
          marginBottom: '20px'
        }}
      >
          Dynamic Form
      </Typography>
      {showLoading === false?
        (<FormControl>
          {inputFields.map((field, index) => (
            <Box 
            key={`${field}_${index}`}
              sx={{
                margin: '20px 0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <TextField 
                variant='outlined' 
                label='Name' 
                name='name' 
                value={field.name}
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <TextField 
                variant='outlined' 
                label='Class' 
                name='class' 
                value={field.class}
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <TextField 
                variant='outlined' 
                label='Marks in Maths' 
                name='maths' 
                value={field.maths}
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <TextField 
                variant='outlined' 
                label='Marks in Hindi'
                name='hindi' 
                value={field.hindi}
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <TextField 
                variant='outlined' 
                label='Total Marks' 
                name='totalMarks' 
                value={field.totalMarks}
                disabled
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <TextField 
                variant='outlined' 
                label='Percentage' 
                name='percentage'
                value={field.percentage}
                disabled
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <TextField 
                variant='outlined' 
                label='Grade' 
                name='grade' 
                value={field.grade}
                disabled
                onChange={(e) => handleFieldChange(index, e)}
                sx={{
                  margin: '0 5px'
                }}
              />
              <Button 
                onClick={() => removeFields(index)}
                variant='contained'
                sx={{
                  margin: '0 5px',
                  fontSize: '1.8rem',
                  borderRadius: '10px',
                  width: '100%',
                  maxWidth: '50px',
                  padding: '5px',
                  height: '50px',
                }}
              >
                -
              </Button>
              <Button 
                onClick={addFields}
                variant='contained'
                sx={{
                  margin: '0 5px',
                  fontSize: '1.8rem',
                  borderRadius: '10px',
                  width: '100%',
                  maxWidth: '50px',
                  padding: '5px',
                  height: '50px',
                }}
              >
                +
              </Button>
            </Box>
          ))}
          <Button 
            onClick={submitData}
            variant='contained'
            disabled={disabled}
            sx={{
              maxWidth: 'max-content',
              padding: '10px 30px',
              borderRadius: '10px'
            }}
          >
            Submit
          </Button>
          <Toaster />
        </FormControl>):
        (
        <Stack 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.primary.main
          }} 
          spacing={2} 
          direction="row">
          <CircularProgress />
          <Typography 
            variant='h5'
            color={theme.palette.primary.main}
          >
            Loading...
          </Typography>
        </Stack>
        )
          }
    </Box>
  )
}
