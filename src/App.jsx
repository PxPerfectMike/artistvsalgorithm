import { ThemeProvider } from '@emotion/react';
import { theme } from './assets/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Vlog from './pages/Vlog';
import Videog from './pages/Videog';
import Photog from './pages/Photog';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						minHeight: '100vh',
						textAlign: 'start',
						backgroundColor: '#070606',
					}}
				>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/vlog' element={<Vlog />} />
						<Route path='/videog' element={<Videog />} />
						<Route path='/Photog' element={<Photog />} />
					</Routes>
					<Navbar />
				</Box>
			</Router>
		</ThemeProvider>
	);
}

export default App;
